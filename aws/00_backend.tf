terraform {
  backend "s3" {
    bucket  = "ebliq-landingpage-terraform-state-3b1lnce2n9l2p7bn"
    key     = "state_file"
    region  = "eu-central-1"
    profile = "default"
  }
}
