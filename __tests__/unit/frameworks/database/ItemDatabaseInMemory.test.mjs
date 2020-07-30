import { createDb } from '../../../../dist/src/frameworks/database/createDb';

const database = createDb({ databaseName: 'inmemory' });
//import { database } from '../../../testdata/mockDatabase.testdata.mjs';

import { validItem } from '../../../testdata/database.testdata.mjs';

describe('Failure cases', () => {
  test('It should throw if missing request and validator', () => {
    expect(() => {
      database().toThrow();
    });
  });

  test('It should fail to create if missing item', async () => {
    await expect(database.create()).rejects.toBeTruthy();
  });

  test('It should fail to read if missing item', async () => {
    await expect(database.read()).rejects.toBeTruthy();
  });

  test('It should fail to update if missing item', async () => {
    await expect(database.update()).rejects.toBeTruthy();
  });

  test('It should fail to delete if missing item', async () => {
    await expect(database.delete()).rejects.toBeTruthy();
  });
});

describe('Success cases', () => {
  test('It should successfully create an item', async () => {
    await expect(() => {
      database.create(validItem).resolves.toEqual(expect.objectContaining(validItem));
    });
  });
});
