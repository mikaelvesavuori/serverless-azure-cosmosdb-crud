/**
 * @description Interface for Item (update)
 * @interface
 */
export interface ItemUpdateInterface {
  readonly id: string;
  readonly category?: string;
  readonly name?: string;
  readonly description?: string;
}
