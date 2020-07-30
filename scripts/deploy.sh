# References:
# https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/deploy-cli
# https://docs.microsoft.com/en-us/cli/azure/cosmosdb?view=azure-cli-latest
# https://docs.microsoft.com/en-us/cli/azure/cosmosdb/sql/database?view=azure-cli-latest
# https://docs.microsoft.com/en-us/cli/azure/cosmosdb/sql/container?view=azure-cli-latest#az-cosmosdb-sql-container-create

# Set up variables in the environment
export LOCATION=westeurope
export RG_NAME=cosmosdb-sql-test-rg
export DEPLOYMENT_NAME=cosmosdb-test-deployment
export TEMPLATE_PATH=./arm/template.json
export PARAMETERS_PATH=./arm/parameters.json

export COSMOSDB_ACCOUNT_NAME=cosmosdbsqltest
export COSMOSDB_CONTAINER_NAME=TestContainer
export COSMOSDB_DB_NAME=CosmosDbTest
export PARTITION_KEY_PATH=/test/items
export THROUGHPUT=400

# Create a resource group to contain anything that has to do with the database
az group create --name $RG_NAME --location $LOCATION

# Deploy base
az deployment group create \
  --name $DEPLOYMENT_NAME \
  --resource-group $RG_NAME \
  --template-file $TEMPLATE_PATH \
  --parameters @$PARAMETERS_PATH

# Create SQL database
az cosmosdb sql database create \
  --account-name $COSMOSDB_ACCOUNT_NAME \
  --name $COSMOSDB_DB_NAME \
  --resource-group $RG_NAME \
  --throughput $THROUGHPUT

# Create SQL container
az cosmosdb sql container create \
  --account-name $COSMOSDB_ACCOUNT_NAME \
  --database-name $COSMOSDB_DB_NAME \
  --name $COSMOSDB_CONTAINER_NAME \
  --partition-key-path $PARTITION_KEY_PATH \
  --resource-group $RG_NAME \
  --throughput $THROUGHPUT

# List connections strings and endpoints
# Put those values in "src/config.ts"
az cosmosdb keys list \
  --name $COSMOSDB_ACCOUNT_NAME \
  --resource-group $RG_NAME \
  --type connection-strings