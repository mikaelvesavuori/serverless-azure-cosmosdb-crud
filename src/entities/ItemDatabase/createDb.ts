import { CosmosClient } from '@azure/cosmos';

import { CosmosDBConfig } from '../../config';
import { ItemDatabaseCreate } from '../../contracts/ItemDatabase/ItemDatabaseCreate';
import { ItemDatabaseCosmosDB } from './ItemDatabaseCosmosDB';
import { ItemDatabaseInMemory } from './ItemDatabaseInMemory';

/**
 * @description Create a database that can be used by others. Abstracts away setup from implementation.
 * @param database - Database type to start
 */
export function createDb(database: ItemDatabaseCreate) {
  if (!database) throw new Error('Missing database!');

  if (database.databaseName.toLowerCase() === 'cosmosdb') {
    const { endpoint, key, databaseId, containerId } = CosmosDBConfig;

    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    const db = new ItemDatabaseCosmosDB(container);

    return db;
  } else if (database.databaseName.toLowerCase() === 'inmemory') {
    const container: [] = [];
    const db = new ItemDatabaseInMemory();
    return db;
  } else throw new Error('No valid database option provided!');
}
