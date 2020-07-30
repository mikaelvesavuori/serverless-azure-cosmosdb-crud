import { ItemDatabase } from './ItemDatabase';
import { ItemCreate, ItemRead, ItemUpdate, ItemDelete } from '../../app/contracts/Item/Item';
import {
  ItemCreateResponse,
  ItemReadResponse,
  ItemUpdateResponse,
  ItemDeleteResponse
} from '../../app/contracts/ItemDatabase/ItemDatabaseResponse';

import { cleanCosmosDbItems } from './cleanCosmosDbItems';

/**
 * @description Item database, concrete implementation for CosmosDB
 * @class
 */
export class ItemDatabaseCosmosDB implements ItemDatabase {
  protected container: any;

  // database: DatabaseInterface
  constructor(container: any) {
    // this.database = database;
    this.container = container;
  }

  /**
   * @description Method for creating item
   */
  async create(item: ItemCreate): Promise<ItemCreateResponse> {
    return new Promise(async (resolve, reject) => {
      if (!item) reject('Missing item!');

      const createdItem = await this.container.items.create(item);
      const { resource } = createdItem;
      const _item: ItemCreateResponse[] = cleanCosmosDbItems([resource]);
      resolve({ ..._item[0] });
    });
  }

  /**
   * @description Method for reading item(s)
   */
  async read(item: ItemRead): Promise<ItemReadResponse[]> {
    return new Promise(async (resolve, reject) => {
      if (!item) reject('Missing item!');

      const query = (() => {
        const id = item.id || null;

        // If no ID is passed, get all items
        if (!id)
          return {
            query: `SELECT * from c`
          };

        // If an ID is passed, get that specific item
        return {
          query: `SELECT * FROM c WHERE c.id = "${id}"`
        };
      })();

      const { resources: items } = await this.container.items.query(query).fetchAll();
      const _items: object[] = cleanCosmosDbItems(items);
      resolve(_items);
    });
  }

  /**
   * @description Method for updating item
   */
  async update(item: ItemUpdate): Promise<ItemUpdateResponse> {
    return new Promise(async (resolve, reject) => {
      if (!item) reject('Missing item!');
      if (!item.id) reject('Missing item ID!');

      const id = item.id;

      // Get the existing document and keep its values so we can mock a partial update
      const existingItem = await this.read({ id });

      // Copy the existing item and its values, then update/replace with anything new
      let itemToUpdate = { ...existingItem[0] };
      if (item.category) itemToUpdate.category = item.category;
      if (item.name) itemToUpdate.name = item.name;
      if (item.description) itemToUpdate.description = item.description;

      // Do the update
      const { resource: updatedItem } = await this.container.item(id).replace(itemToUpdate);
      const _item: ItemUpdateResponse[] = cleanCosmosDbItems([updatedItem]);
      resolve(_item[0]);
    });
  }

  /**
   * @description Method for deleting item
   */
  async delete(item: ItemDelete): Promise<ItemDeleteResponse> {
    return new Promise(async (resolve, reject) => {
      if (!item) reject('Missing item!');
      if (!item.id) reject('Missing item ID!');

      try {
        await this.container.item(item.id).delete();
        resolve({
          id: item.id
        });
      } catch (error) {
        reject('Item does not exist!');
      }
    });
  }
}
