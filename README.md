# tf-az-static-web-app

This is example for deploying a Azure Static Web App with terraform.

The App is refered as Demo and it has 2 parts demo-front and demo-back

### demo-front
demo-front is a React Single Page application that is calling a /api/HelloFromTheOtherSide relative url path. Frontend application is written in TypeScript.

### demo-back
demo-back is a Azure Function App that listens for HTTP requests and takes in a name variable which is then used in to response with a greeting. Backend application is written in TypeScript.

### Terraform
terraform is Infrastructure as a Code tool which stores the state of the deployments so that when there are changes implemented they can be previewed. It also has a module structure for supporting various cloud services and supports cross sharing of information between those cloud services.

## Tutorial
1 install terraform
1 install azure-cli
1 authenticate with azure subscription
1 run terraform init
1 run terraform apply
