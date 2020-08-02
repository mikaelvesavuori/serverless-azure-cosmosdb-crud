/**
 * @description Filter out anything that is OK according to the interface
 */
export const getValidArgs = (args: object[] = [], allowedFields: string[] = []) =>
  Object.entries(args)
    .filter((arg) => (allowedFields.length > 0 ? allowedFields.includes(arg[0]) : arg))
    .map((arg) => {
      return {
        [arg[0]]: arg[1]
      };
    });
