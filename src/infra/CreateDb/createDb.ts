import { CosmosClient } from '@azure/cosmos';

import { DatabaseCreateInterface } from '../../domain/Database/DatabaseCreateInterface';
import { CosmosDBConfig } from '../../infra/Config/CosmosDBConfig';
import { ItemDatabase } from '../../interfaces/Database/ItemDatabase';

/**
 * @description Create a database that can be used by others. Abstracts away setup from implementation.
 * @param database - Database type to start
 */
export function createDb(database: DatabaseCreateInterface) {
  if (database.databaseName === 'CosmosDB') {
    const { endpoint, key, databaseId, containerId } = CosmosDBConfig;

    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    const db = new ItemDatabase(container);

    return db;
  }
  return null;
}
