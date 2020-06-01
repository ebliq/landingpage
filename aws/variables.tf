variable "prefix" {
  type        = string
  description = "prefix"
}


# variable "root_domain_name" {
#   type    = string
# }

variable "aws_profile" {
  type = string
}

variable "default_region" {
  type    = string
  default = "eu-central-1"
}

# variable "acm_arn_root" {
#   default = "arn:aws:acm:us-east-1:527148660016:certificate/c1d753d1-540d-43bf-9a70-a855cd2c5225"
# }

# variable "hosted_zone_id" {
#   type    = string
#   default = "Z0073832WWYG6NMOR6I9"
# }

variable "random_id" {
  type    = string
  default = "3b1lnce2n9l2p7bn"
}

# variable "subject_alternative_names" {
#   type = list(string)
# }
