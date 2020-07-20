export const CosmosDBConfig = {
  endpoint: '<your-endpoint-uri>',
  key: '<primary_key>',
  databaseId: 'CosmosDbTest',
  containerId: 'TestContainer',
  partitionKey: { kind: 'Hash', paths: ['/test/items'] }
};
