import { CosmosClient } from '@azure/cosmos';

import { ItemCreateInterface } from '../../domain/Item/ItemCreateInterface';
import { ItemReadInterface } from '../../domain/Item/ItemReadInterface';
import { ItemUpdateInterface } from '../../domain/Item/ItemUpdateInterface';
import { ItemDeleteInterface } from '../../domain/Item/ItemDeleteInterface';

import { config } from './config';

const { endpoint, key, databaseId, containerId } = config;
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

/**
 * @description Item database
 * @class
 */
export class ItemDatabase {
  /**
   * @description Method for creating items
   */
  async create(item: ItemCreateInterface) {
    return await container.items.create(item);
  }

  /**
   * @description Method for reading items
   */
  async read(item: ItemReadInterface) {
    const query = (() => {
      const id = item.id || null;

      // If no ID is passed, get all items
      if (!id)
        return {
          query: 'SELECT * from c'
        };

      // If an ID is passed, get that specific item
      return {
        query: `SELECT * FROM c WHERE c.id = "${id}"`
      };
    })();

    const { resources: items } = await container.items.query(query).fetchAll();
    return items;
  }

  /**
   * @description Method for updating items
   */
  async update(item: ItemUpdateInterface) {
    const id = item.id;

    // Get the existing document and keep its values so we can mock a partial update
    const existingItem = await this.read({ id });

    // Copy the existing item and its values, then update/replace with anything new
    let itemToUpdate = { ...existingItem[0] };
    if (item.category) itemToUpdate.category = item.category;
    if (item.name) itemToUpdate.name = item.name;
    if (item.description) itemToUpdate.description = item.description;

    // Do the update
    const { resource: updatedItem } = await container.item(id).replace(itemToUpdate);
    return updatedItem;
  }

  /**
   * @description Method for deleting items
   */
  async delete(item: ItemDeleteInterface) {
    await container.item(item.id).delete();
  }
}
