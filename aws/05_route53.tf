# # -----------------------------------------------
# # Zone
# # -----------------------------------------------

# # Primary Domain = nbb.cc-n.dev
# resource "aws_route53_zone" "primary" {
#   name = "nbb.cc-n.dev"
# }
# # -----------------------------------------------
# # Records
# # ----------------------------------------------- 

# resource "aws_route53_record" "dev-a" {
#   zone_id = var.hosted_zone_id
#   name    = var.root_domain_name
#   type    = "A"
#   alias {
#     name                   = aws_cloudfront_distribution.application.domain_name
#     zone_id                = aws_cloudfront_distribution.application.hosted_zone_id
#     evaluate_target_health = true
#   }

#   depends_on = [aws_cloudfront_distribution.application]
# }

# resource "aws_route53_record" "dev-aaaa" {
#   zone_id = var.hosted_zone_id
#   name    = var.root_domain_name
#   type    = "AAAA"
#   alias {
#     name                   = aws_cloudfront_distribution.application.domain_name
#     zone_id                = aws_cloudfront_distribution.application.hosted_zone_id
#     evaluate_target_health = true
#   }

#   depends_on = [aws_cloudfront_distribution.application]
# }

# resource "aws_route53_record" "dev-a-www-redirect" {
#   zone_id = var.hosted_zone_id
#   name    = "www.${var.root_domain_name}"
#   type    = "A"
#   alias {
#     name                   = aws_cloudfront_distribution.redirection-to-root.domain_name
#     zone_id                = aws_cloudfront_distribution.redirection-to-root.hosted_zone_id
#     evaluate_target_health = true
#   }

#   depends_on = [aws_cloudfront_distribution.redirection-to-root]
# }

# resource "aws_route53_record" "dev-aaaa-www-redirect" {
#   zone_id = var.hosted_zone_id
#   name    = "www.${var.root_domain_name}"
#   type    = "AAAA"
#   alias {
#     name                   = aws_cloudfront_distribution.redirection-to-root.domain_name
#     zone_id                = aws_cloudfront_distribution.redirection-to-root.hosted_zone_id
#     evaluate_target_health = true
#   }

#   depends_on = [aws_cloudfront_distribution.redirection-to-root]
# }
