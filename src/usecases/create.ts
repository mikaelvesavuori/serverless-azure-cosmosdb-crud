import { Item } from '../contracts/Item/Item';
import { ItemCreate } from '../contracts/Item/Item';
import { ItemDatabase } from '../contracts/ItemDatabase/ItemDatabase';

import { makeItem } from '../frameworks/item/makeItem';

/**
 * @description The "Create" use case which creates a database and then inserts the item there
 * @param item - The item object to create
 * @param database - Database type to use
 */
export const useCaseCreate = async (item: ItemCreate, database: ItemDatabase): Promise<any> => {
  return makeItem(item)
    .then(async (item: Item) => await database.create(item))
    .catch((error) => {
      throw new Error(error);
    });
};
