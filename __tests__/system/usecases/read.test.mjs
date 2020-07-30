import { useCaseRead } from '../../../dist/src/usecases/read.js';

import { database } from '../../testdata/mockDatabase.testdata.mjs';

describe('Failure cases', () => {
  test('It should fail if started with no item or database', async () => {
    await expect(useCaseRead()).rejects.toThrow();
  });

  test('It should fail if started with no item', async () => {
    await expect(useCaseRead(null, {})).rejects.toThrow();
  });

  test('It should fail if started with no database', async () => {
    await expect(useCaseRead({}, null)).rejects.toThrow();
  });

  test('It should fail if provided with no ID', async () => {
    await expect(useCaseRead({}, {})).rejects.toThrow();
  });
});

describe('Success cases', () => {
  test('It should succeed if started with valid input data', async () => {
    await expect(
      useCaseRead(
        {
          id: 278903
        },
        database
      )
    ).resolves.toBeTruthy();
  });
});
