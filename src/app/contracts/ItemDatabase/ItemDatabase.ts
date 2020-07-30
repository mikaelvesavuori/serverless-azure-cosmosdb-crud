/**
 * @description Interface for creating a database
 * @interface
 */
export interface ItemDatabaseCreate {
  readonly databaseName: 'CosmosDB' | 'inmemory' | string;
}

/**
 * @description Interface for database implementation
 * @interface
 */
export interface ItemDatabase {
  /**
   * Create one item
   * @param item object that will be added.
   */
  create(item: any): Promise<any>;

  /**
   * Read one or many items
   * @param item object that will be added.
   */
  read(item: any): Promise<any>;

  /**
   * Update one item
   * @param item object that will be added.
   */
  update(item: any): Promise<any>;

  /**
   * Delete one item
   * @param item object that will be added.
   */
  delete(item: any): Promise<any>;
}
