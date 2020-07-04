terraform {
  backend "s3" {
    bucket  = "ebliq-terraform-state-bucket-eu-central-1-3b1lnce2n9l2p7bn"
    key     = "state_file"
    region  = "eu-central-1"
    profile = "ebliq"
  }
}
