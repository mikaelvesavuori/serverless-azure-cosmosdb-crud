import { ItemCreate, ItemRead, ItemUpdate, ItemDelete } from '../../app/contracts/Item/Item';
import {
  ItemCreateResponse,
  ItemReadResponse,
  ItemUpdateResponse,
  ItemDeleteResponse
} from '../../app/contracts/ItemDatabase/ItemDatabaseResponse';

/**
 * @description Item database, abstract main implementation
 * @class
 */
export abstract class ItemDatabase {
  abstract async create(item: ItemCreate): Promise<ItemCreateResponse>;

  abstract async read(item: ItemRead): Promise<ItemReadResponse[]>;

  abstract async update(item: ItemUpdate): Promise<ItemUpdateResponse>;

  abstract async delete(item: ItemDelete): Promise<ItemDeleteResponse>;
}
