import { useCaseDelete } from '../../../dist/src/usecases/delete.js';

import { database } from '../../testdata/mockDatabase.testdata.mjs';

describe('Failure cases', () => {
  test('It should fail if started with no item or database', async () => {
    await expect(useCaseDelete()).rejects.toThrow();
  });

  test('It should fail if started with no item', async () => {
    await expect(useCaseDelete(null, {})).rejects.toThrow();
  });

  test('It should fail if started with no database', async () => {
    await expect(useCaseDelete({}, null)).rejects.toThrow();
  });

  test('It should fail if provided with no ID', async () => {
    await expect(useCaseDelete({}, {})).rejects.toThrow();
  });
});

describe('Success cases', () => {
  test('It should succeed if started with valid input data', async () => {
    await expect(
      useCaseDelete(
        {
          id: 278903
        },
        database
      )
    ).resolves.toBeTruthy();
  });
});
