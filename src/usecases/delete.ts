import { ItemDelete } from '../app/contracts/Item/Item';
import { ItemDatabase } from '../app/contracts/ItemDatabase/ItemDatabase';

/**
 * @description The "Delete" use case which creates a database and then deletes an item from there
 * @param id - The ID of the item to delete
 * @param database - Database type to use
 */
export const useCaseDelete = async (id: ItemDelete, database: ItemDatabase): Promise<any> => {
  return await database.delete(id);
};
