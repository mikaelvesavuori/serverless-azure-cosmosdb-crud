/**
 * @description Send back cleaned list as single object
 */
export const remapCleanedEntries = (args: object[]) => {
  if (!args || args.length === 0) return {};

  return args.reduce((obj, arg) => {
    const key: string | number | boolean = Object.keys(arg)[0];
    const value: string | number | boolean = Object.values(arg)[0];
    return {
      ...obj,
      [key]: value
    };
  });
};
