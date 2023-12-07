terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-central-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

resource "aws_instance" "web-server" {
  ami           = "ami-06dd92ecc74fdfb36"
  instance_type = "t2.micro"

  tags = {
    Name = "github-gql-front"
  }

}


resource "aws_amplify_app" "github-gql" {
  name = "github-gql" 

  repository = "https://github.com/gharbiamine/github-GQL-API-search/" 

  oauth_token = var.github_oauth_token


  environment_variables = {
    ENV_VAR_NAME = "Environment Variable Value"
  }

  build_spec = <<-EOT
version: 1
frontend:
  phases:
    preBuild:
      commands: ["npm install"]
    build:
      commands: ["npm run build"]
  artifacts:
    baseDirectory: /dist
    files:
      - '**/*'
  cache:
    paths: []
EOT
}


resource "aws_amplify_branch" "amplify_branch" {
  app_id      = aws_amplify_app.github-gql.id
  branch_name = "main"
}

output "amplify_app_id" {
  value = aws_amplify_app.github-gql.id
}




