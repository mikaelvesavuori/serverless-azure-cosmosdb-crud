import { Item } from './itemSchema';
import { itemValidator } from './itemValidator';

/**
 * @description Factory to produce a valid Item.
 */
export const makeItem = async (item: Item): Promise<Item> => {
  return new Promise((resolve, reject) => {
    if (!item || Object.keys(item).length === 0) reject('No item provided to makeItem()!');
    if (itemValidator(item)) resolve(item);
    reject('Item not valid!');
  });
};
