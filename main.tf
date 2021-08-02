provider "azurerm" {
  features {}
}

variable "tags" {
  type        = map(string)
  default     = {}
  description = "tags to use in resource group"
}


resource "random_string" "uniquer" {
  length  = 4
  upper   = false
  lower   = true
  number  = true
  special = false
}

resource "azurerm_resource_group" "example" {
  name     = "example-${random_string.uniquer.result}"
  location = "West Europe"
  tags = var.tags
}

resource "azurerm_static_site" "example" {
  name                = "example-${random_string.uniquer.result}"
  resource_group_name = azurerm_resource_group.example.name
  location            = azurerm_resource_group.example.location
}
