/**
 * @description Interface for creating a database.
 */
export interface ItemDatabaseCreate {
  readonly databaseName: 'CosmosDB' | 'inmemory' | string;
}
