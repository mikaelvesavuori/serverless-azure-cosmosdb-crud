/**
 * @description Interface for Item (create)
 * @interface
 */
export interface ItemCreateResponse {
  category: string;
  name: string;
  description: string;
}

/**
 * @description Interface for Item (read)
 * @interface
 */
export interface ItemReadResponse {
  id?: string;
  category?: string;
  name?: string;
  description?: string;
}

/**
 * @description Interface for Item (update)
 * @interface
 */
export interface ItemUpdateResponse {
  id: string;
  category?: string;
  name?: string;
  description?: string;
}

/**
 * @description Interface for Item (delete)
 * @interface
 */
export interface ItemDeleteResponse {
  id: string;
}
