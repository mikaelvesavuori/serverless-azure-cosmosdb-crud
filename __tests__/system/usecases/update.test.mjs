import { useCaseUpdate } from '../../../dist/src/usecases/update.js';

import { database } from '../../testdata/mockDatabase.testdata.mjs';

describe('Failure cases', () => {
  test('It should fail if started with no item or database', async () => {
    await expect(useCaseUpdate()).rejects.toThrow();
  });

  test('It should fail if started with no item', async () => {
    await expect(useCaseUpdate(null, {})).rejects.toThrow();
  });

  test('It should fail if started with no database', async () => {
    await expect(useCaseUpdate({}, null)).rejects.toThrow();
  });

  test('It should fail if provided with empty item', async () => {
    await expect(useCaseUpdate({}, {})).rejects.toThrow();
  });
});

describe('Success cases', () => {
  test('It should succeed if started with valid input data', async () => {
    await expect(
      useCaseUpdate(
        {
          category: 'asdf',
          name: 'asdf',
          description: 'asdf'
        },
        database
      )
    ).resolves.toBeTruthy();
  });
});
