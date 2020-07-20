import { ItemCreateInterface } from '../../domain/Item/ItemCreateInterface';
import { ItemReadInterface } from '../../domain/Item/ItemReadInterface';
import { ItemUpdateInterface } from '../../domain/Item/ItemUpdateInterface';
import { ItemDeleteInterface } from '../../domain/Item/ItemDeleteInterface';

/**
 * @description Item database
 * @class
 */
export class ItemDatabase {
  // Yeah, using "any" is pretty shit but had to do a quick hack
  readonly container: any;

  constructor(container: any) {
    this.container = container;
  }

  /**
   * @description Method for creating item
   */
  async create(item: ItemCreateInterface) {
    const createdItem = await this.container.items.create(item);
    const { resource } = createdItem;
    return resource;
  }

  /**
   * @description Method for reading item(s)
   */
  async read(item: ItemReadInterface) {
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
    return items;
  }

  /**
   * @description Method for updating item
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
    const { resource: updatedItem } = await this.container.item(id).replace(itemToUpdate);
    return updatedItem;
  }

  /**
   * @description Method for deleting item
   */
  async delete(item: ItemDeleteInterface) {
    await this.container.item(item.id).delete();
    return `Deleted item with ID ${item.id}`;
  }
}
