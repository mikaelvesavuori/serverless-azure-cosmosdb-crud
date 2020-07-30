export const configApi = {
  database: 'cosmosdb'
};

export const configCli = {
  database: 'inmemory'
};

export const CosmosDBConfig = {
  endpoint: '<your_endpoint_uri>',
  key: '<primary_key>',
  databaseId: 'CosmosDbTest',
  containerId: 'TestContainer',
  partitionKey: { kind: 'Hash', paths: ['/test/items'] }
};
