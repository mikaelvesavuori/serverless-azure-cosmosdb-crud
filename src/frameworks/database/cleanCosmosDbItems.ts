/**
 * @description Get cleaned CosmosDB items from array of items
 */
export function cleanCosmosDbItems(items: Record<string, unknown>[]) {
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
