/**
 * Get cleaned CosmosDB items from array of items
 *
 * @export
 * @param {object[]} items
 * @returns
 */
export function cleanCosmosDbItems(items: object[]) {
  if (!items || items.length === 0) throw new Error('No items passed to cleanCosmosDbItems!');

  return items.map((item: any) => {
    return {
      category: item.category,
      name: item.name,
      description: item.description,
      id: item.id
    };
  });
}
