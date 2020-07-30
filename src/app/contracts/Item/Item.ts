/**
 * @description Interface for Item (create)
 * @interface
 */
export interface ItemCreate {
  readonly category: string;
  readonly name: string;
  readonly description: string;
}

/**
 * @description Interface for Item (read)
 * @interface
 */
export interface ItemRead {
  readonly id?: string | null;
}

/**
 * @description Interface for Item (update)
 * @interface
 */
export interface ItemUpdate {
  readonly id: string;
  readonly category?: string;
  readonly name?: string;
  readonly description?: string;
}

/**
 * @description Interface for Item (delete)
 * @interface
 */
export interface ItemDelete {
  readonly id: string;
}
