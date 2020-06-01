# // Client
# resource "aws_acm_certificate" "client_cert" {
#   provider                  = aws.acm
#   domain_name               = var.root_domain_name
#   subject_alternative_names = var.subject_alternative_names
#   validation_method         = "DNS"
# }

# resource "aws_route53_record" "client_cert_validation" {
#   provider = aws.acm
#   name     = aws_acm_certificate.client_cert.domain_validation_options[0].resource_record_name
#   type     = aws_acm_certificate.client_cert.domain_validation_options[0].resource_record_type
#   zone_id  = aws_route53_zone.primary.zone_id
#   records  = [aws_acm_certificate.client_cert.domain_validation_options[0].resource_record_value]
#   ttl      = 300
# }

# resource "aws_route53_record" "client_cert_validation_1" {
#   provider = aws.acm
#   name     = aws_acm_certificate.client_cert.domain_validation_options[1].resource_record_name
#   type     = aws_acm_certificate.client_cert.domain_validation_options[1].resource_record_type
#   zone_id  = aws_route53_zone.primary.zone_id
#   records  = [aws_acm_certificate.client_cert.domain_validation_options[1].resource_record_value]
#   ttl      = 300
# }

# resource "aws_route53_record" "client_cert_validation_2" {
#   provider = aws.acm
#   name     = aws_acm_certificate.client_cert.domain_validation_options[2].resource_record_name
#   type     = aws_acm_certificate.client_cert.domain_validation_options[2].resource_record_type
#   zone_id  = aws_route53_zone.primary.zone_id
#   records  = [aws_acm_certificate.client_cert.domain_validation_options[2].resource_record_value]
#   ttl      = 300
# }

# resource "aws_acm_certificate_validation" "client_cert" {
#   provider        = aws.acm
#   depends_on      = [aws_acm_certificate.client_cert]
#   certificate_arn = aws_acm_certificate.client_cert.arn
# }

# output "acm_api_arn_api" {
#   value = aws_acm_certificate.client_cert
# }

# output "acm_arn_root" {
#   value = aws_acm_certificate.client_cert.arn
# }
