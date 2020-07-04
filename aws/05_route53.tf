
resource "aws_route53_record" "root-domain-a" {
  zone_id = "Z0777172P8AE85GM3JHJ"
  name    = "ebliq.de"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.landingpage.domain_name
    zone_id                = aws_cloudfront_distribution.landingpage.hosted_zone_id
    evaluate_target_health = false
  }
  depends_on = [aws_cloudfront_distribution.landingpage]
}

resource "aws_route53_record" "root-domain-aaaa" {
  zone_id = "Z0777172P8AE85GM3JHJ"
  name    = "ebliq.de"
  type    = "AAAA"
  alias {
    name                   = aws_cloudfront_distribution.landingpage.domain_name
    zone_id                = aws_cloudfront_distribution.landingpage.hosted_zone_id
    evaluate_target_health = false
  }

  depends_on = [aws_cloudfront_distribution.landingpage]
}

resource "aws_route53_record" "root-domain-a-www-redirect" {
  zone_id = "Z0777172P8AE85GM3JHJ"
  name    = "www.ebliq.de"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.redirection-to-root.domain_name
    zone_id                = aws_cloudfront_distribution.redirection-to-root.hosted_zone_id
    evaluate_target_health = false
  }

  depends_on = [aws_cloudfront_distribution.redirection-to-root]
}

resource "aws_route53_record" "root-domain-aaaa-www-redirect" {
  zone_id = "Z0777172P8AE85GM3JHJ"
  name    = "www.ebliq.de"
  type    = "AAAA"
  alias {
    name                   = aws_cloudfront_distribution.redirection-to-root.domain_name
    zone_id                = aws_cloudfront_distribution.redirection-to-root.hosted_zone_id
    evaluate_target_health = false
  }

  depends_on = [aws_cloudfront_distribution.redirection-to-root]
}
