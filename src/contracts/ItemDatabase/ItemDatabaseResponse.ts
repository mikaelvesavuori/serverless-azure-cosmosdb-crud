/**
 * @description Interface for Item (create).
 */
export interface ItemCreateResponse {
  category: string;
  name: string;
  description: string;
}

/**
 * @description Interface for Item (read).
 */
export interface ItemReadResponse {
  id?: string;
  category?: string;
  name?: string;
  description?: string;
}

/**
 * @description Interface for Item (update).
 */
export interface ItemUpdateResponse {
  id: string;
  category?: string;
  name?: string;
  description?: string;
}

/**
 * @description Interface for Item (delete).
 */
export interface ItemDeleteResponse {
  id: string;
}
