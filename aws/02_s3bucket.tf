
// Hosting - homepage
resource "aws_s3_bucket" "landingpage" {
  bucket = "ebliq-landingpage-nd23h47328420zfg"
  acl    = "private"

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

resource "aws_s3_bucket" "hosting-redirect" {
  bucket = "ebliq-landingpage-redirect-nd23h47328420zfg"
  acl    = "private"
  website {
    redirect_all_requests_to = "https://ebliq.de"
  }
}

resource "aws_s3_bucket_policy" "public-access-website" {
  bucket     = aws_s3_bucket.landingpage.id
  depends_on = [aws_s3_bucket.landingpage]
  policy     = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "${aws_s3_bucket.landingpage.arn}/*"
    }
  ]
}
POLICY
}
