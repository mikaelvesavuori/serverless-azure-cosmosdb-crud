import { ItemUpdate } from '../contracts/Item/Item';
import { ItemDatabase } from '../contracts/ItemDatabase/ItemDatabase';

/**
 * @description The "Update" use case which creates a database and then updates the item there
 * @param item - The item to update
 * @param database - Database type to use
 */
export const useCaseUpdate = async (item: ItemUpdate, database: ItemDatabase): Promise<any> => {
  return await database.update(item);
};
