# tf-az-static-web-app

This is example for deploying a Azure Static Web App with terraform.

The App is refered as Demo and it has 2 parts demo-front and demo-back

## demo-front
demo-front is a React Single Page application that is calling a /api/HelloFromTheOtherSide relative url path. Frontend application is written in TypeScript.

## demo-back
demo-back is a Azure Function App that listens for HTTP requests and takes in a name variable which is then used in to response with a greeting. Backend application is written in TypeScript.