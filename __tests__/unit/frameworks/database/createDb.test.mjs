import { createDb } from '../../../../dist/src/frameworks/database/createDb.js';

import {
  ValidDatabaseDataCosmosDB,
  ValidDatabaseDataInMemory,
  InvalidDatabase
} from '../../../testdata/createDb.testdata.mjs';

describe('Failure cases', () => {
  test('It should throw if no database is provided', () => {
    expect(() => {
      createDb();
    }).toThrow();
  });

  test('It should throw if invalid database option is provided', () => {
    expect(() => {
      createDb(InvalidDatabase);
    }).toThrow();
  });
});

describe('Success cases', () => {
  test('It should send a truthy response for starting a CosmosDB database', () => {
    expect(() => {
      createDb(ValidDatabaseDataCosmosDB);
    }).toBeTruthy();
  });

  test('It should send a truthy response for starting an in-memory database', () => {
    expect(() => {
      createDb(ValidDatabaseDataInMemory);
    }).toBeTruthy();
  });
});
