import { ItemCreate, ItemRead, ItemUpdate, ItemDelete } from '../Item/Item';
import { ItemCreateResponse, ItemReadResponse, ItemUpdateResponse, ItemDeleteResponse } from './ItemDatabaseResponse';

/**
 * @description Item database abstraction.
 */
export abstract class ItemDatabase {
  /**
   * Create one item
   * @param item object that will be added.
   */
  abstract create(item: ItemCreate): Promise<ItemCreateResponse>;
  /**
   * Read one or many items
   * @param item object that will be added.
   */
  abstract read(item: ItemRead): Promise<ItemReadResponse[]>;
  /**
   * Update one item
   * @param item object that will be added.
   */
  abstract update(item: ItemUpdate): Promise<ItemUpdateResponse>;
  /**
   * Delete one item
   * @param item object that will be added.
   */
  abstract delete(item: ItemDelete): Promise<ItemDeleteResponse>;
}
