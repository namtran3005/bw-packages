variable "figma_token" {}
variable "github_token" {}
variable "figma_team_id" {}
terraform {
  backend "s3" {
    bucket   = "barath-kumar-terraform-state"
    key      = "icons.tfstate"
    region   = "eu-central-1"
    role_arn = "arn:aws:iam::519831403352:role/Developer"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}
provider "aws" {
  region = "eu-central-1"
  assume_role {
    role_arn = "arn:aws:iam::519831403352:role/Developer"
  }
}
provider "aws" {
  alias  = "acm"
  region = "us-east-1"
  assume_role {
    role_arn = "arn:aws:iam::519831403352:role/Developer"
  }
}

resource "random_password" "figma_passcode" {
  length  = 16
  special = false
}
module "site" {
  providers = {
    aws.acm = aws.acm
  }
  source      = "git::https://github.bitwa.la/barath-vrittamani/infrastructure.git//modules/s3-static-site"
  subdomain   = "icons"
  zone        = "internal.nuribanking.dev"
  content_dir = "${path.module}/../build/storybook"
}
module "webhook" {
  source                                       = "terraform-aws-modules/lambda/aws"
  function_name                                = "figma-webhook"
  description                                  = "webhook watching for figma changes"
  handler                                      = "src/webhook/lambda.handler"
  runtime                                      = "nodejs14.x"
  create_lambda_function_url                   = true
  create_unqualified_alias_lambda_function_url = true
  memory_size                                  = 2048
  environment_variables = {
    NODE_ENV       = "production"
    FIGMA_TOKEN    = var.figma_token
    FIGMA_PASSCODE = random_password.figma_passcode.result
    GITHUB_TOKEN   = var.github_token
  }
  source_path = [
    {
      path          = "${path.module}/../build/webhook"
      prefix_in_zip = "src"
    },
    {
      path          = "${path.module}/../config"
      prefix_in_zip = "config"
    },
    {
      path = "${path.module}/../node_modules",
      commands = [
        "yarn install --production",
        ":zip node_modules/.* node_modules"
      ]
      prefix_in_zip = "node_modules"
    }
  ]
}

locals {
  webhook_payload = {
    event_type = "FILE_VERSION_UPDATE"
    team_id    = var.figma_team_id
    passcode   = random_password.figma_passcode.result
    endpoint   = module.webhook.lambda_function_url
  }
}
resource "null_resource" "register_webhook" {
  provisioner "local-exec" {
    command = <<EOF
      curl -s -X POST https://api.figma.com/v2/webhooks \
        -H 'Content-Type: application/json' \
        -H 'X-Figma-Token: ${var.figma_token}' \
        -d '${jsonencode(local.webhook_payload)}'
    EOF
  }
}

output "function_url" {
  value = module.webhook.lambda_function_url
}

