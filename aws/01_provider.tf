provider "aws" {
  region                  = var.default_region
  version                 = "2.44.0"
  shared_credentials_file = "~/.aws/credentials"
  profile                 = var.aws_profile
}
// special provider for Amazon Certificate Manager
# provider "aws" {
#   alias                   = "acm"
#   version                 = "2.44.0"
#   shared_credentials_file = "~/.aws/credentials"
#   profile                 = var.aws_profile
#   region                  = "us-east-1"
# }
