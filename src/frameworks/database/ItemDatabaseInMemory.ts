import { ItemDatabase } from './ItemDatabase';
import { ItemCreate, ItemRead, ItemUpdate, ItemDelete } from '../../app/contracts/Item/Item';
import {
  ItemCreateResponse,
  ItemReadResponse,
  ItemUpdateResponse,
  ItemDeleteResponse
} from '../../app/contracts/ItemDatabase/ItemDatabaseResponse';

/**
 * @description Item database, concrete implementation for local in-memory database
 * @class
 */
export class ItemDatabaseInMemory implements ItemDatabase {
  /**
   * @description Method for creating item
   */
  async create(item: ItemCreate): Promise<ItemCreateResponse> {
    return new Promise((resolve, reject) => {
      if (!item) reject('Missing item!');

      const inMemoryDatabaseMock: object[] = [];
      inMemoryDatabaseMock.push(item);

      resolve(item);
    });
  }

  /**
   * @description Method for reading item(s) - Not implemented yet!
   */
  async read(item: ItemRead): Promise<ItemReadResponse[]> {
    return new Promise(async (resolve, reject) => {
      if (!item) reject('Missing item!');

      const inMemoryDatabaseMock: object[] = [
        {
          id: 'kljh3h',
          category: 'Something',
          name: 'Thing 1',
          description: 'Wow!'
        },
        {
          id: 'g3gjed',
          category: 'Something Else',
          name: 'Thing 2',
          description: 'W00t!'
        },
        {
          id: 'mghke8',
          category: 'Something Altogether Different',
          name: 'Thing 3',
          description: 'Exciting!'
        }
      ];

      resolve(inMemoryDatabaseMock);
    });
  }

  /**
   * @description Method for updating item - Not implemented yet!
   */
  async update(item: ItemUpdate): Promise<ItemUpdateResponse> {
    return new Promise(async (resolve, reject) => {
      if (!item) reject('Missing item!');
      if (!item.id) reject('Missing item ID!');

      resolve(item);
    });
  }

  /**
   * @description Method for deleting item - Not implemented yet!
   */
  async delete(item: ItemDelete): Promise<ItemDeleteResponse> {
    return new Promise(async (resolve, reject) => {
      if (!item) reject('Missing item!');
      if (!item.id) reject('Missing item ID!');

      resolve(item);
    });
  }
}
