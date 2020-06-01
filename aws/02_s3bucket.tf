
// Hosting - homepage
resource "aws_s3_bucket" "landingpage" {
  bucket = "${var.prefix}-${terraform.workspace}-${var.random_id}"
  acl    = "private"
  region = var.default_region

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

# resource "aws_s3_bucket" "hosting-redirect" {
#   bucket = "${var.prefix}-hosting-bucket-redirect-${terraform.workspace}-${var.random_id}"
#   acl    = "private"
#   website {
#     redirect_all_requests_to = "https://${var.root_domain_name}"
#   }
# }

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
