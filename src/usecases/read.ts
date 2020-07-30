import { ItemRead } from '../app/contracts/Item/Item';
import { ItemDatabase } from '../app/contracts/ItemDatabase/ItemDatabase';

/**
 * @description The "Read" use case which creates a database and then reads/gets items from there
 * @param id - The ID of the item to delete
 * @param database - Database type to use
 */
export const useCaseRead = async (id: ItemRead, database: ItemDatabase): Promise<any> => {
  if (!id) throw new Error('No item ID provided!');
  if (!database) throw new Error('No database provided!');

  return await database.read(id);
};
