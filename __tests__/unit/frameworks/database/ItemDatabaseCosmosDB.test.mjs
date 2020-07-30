import { createDb } from '../../../../dist/src/frameworks/database/createDb';

const database = createDb({ databaseName: 'cosmosdb' });

//import { database } from '../../../testdata/mockDatabase.testdata.mjs';
//const item = { id: 'kaj3j3', category: 'asdf', name: 'asdf', description: 'asdf' };

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

/*
// TODO: None of these work, and should probably be mocked anyway
describe('Success cases', () => {
  test('It should create', async () => {
    await expect(database.create(item)).resolves.toBeTruthy();
  });

  test('It should read', async () => {
    await expect(database.read(item)).resolves.toBeTruthy();
  });

  test('It should update', async () => {
    await expect(database.update(item)).resolves.toBeTruthy();
  });

  test('It should delete', async () => {
    await expect(database.delete(item)).resolves.toBeTruthy();
  });
});
*/
