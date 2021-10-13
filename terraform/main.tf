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

resource "azurerm_storage_account" "example" {
  name                = "mockcms${random_string.uniquer.result}"
  resource_group_name = azurerm_resource_group.example.name
  location            = azurerm_resource_group.example.location

  account_replication_type = "LRS"
  account_tier             = "Standard"  

  static_website {
    error_404_document = "index.html"
    index_document     = "index.html"
  }

  blob_properties {
    cors_rule {
       allowed_headers    = [ "", ]
       allowed_methods    = [ "GET", "HEAD", "OPTIONS", ]
       allowed_origins    = [ "*", ]
       exposed_headers    = [ "", ]
       max_age_in_seconds = 10
    }
  }
}

resource "azurerm_storage_blob" "example" {
  name                   = "cards"
  storage_account_name   = azurerm_storage_account.example.name
  storage_container_name = "$web"
  type                   = "Block"
  source_content         = <<EOT
     {
	"cards" : [
		{
			"name": "card1",
			"category" : "frontpage",
			"content" : "this is content text 1st"
		},
		{
			"name": "card2",
			"category" : "frontpage",
			"content" : "this is content text 2nd"
		},
		{
			"name": "card3",
			"category" : "frontpage",
			"content" : "this is content text 3rd"
		},
				{
			"name": "card4",
			"category" : "frontpage",
			"content" : "this is content text 4th"
		}
	]
     }
     EOT
}
