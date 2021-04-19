import { Item } from '../../contracts/Item/Item';

/**
 * @description Item validator function, mainly used before creating something
 */
export const itemValidator = (item: Item) => {
  if (!item) return false;
  if (!item.category || !item.name || !item.description) return false;
  return true;
};
