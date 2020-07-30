import { cleanCosmosDbItems } from '../../../../dist/src/frameworks/database/cleanCosmosDbItems.js';

import { dataUnclean, dataClean } from '../../../testdata/cleanCosmosDbItems.testdata.mjs';

describe('Failure cases', () => {
  test('It should fail if being started without items', () => {
    expect(() => {
      cleanCosmosDbItems();
    }).toThrow();
  });

  test('It should fail if being started with zero-length array', () => {
    expect(() => {
      cleanCosmosDbItems([]);
    }).toThrow();
  });
});

describe('Success cases', () => {
  test('It should successfully return a new array of cleaned objects', () => {
    expect(cleanCosmosDbItems(dataUnclean)).toEqual(dataClean);
  });
});
