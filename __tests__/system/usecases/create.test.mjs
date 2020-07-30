import { useCaseCreate } from '../../../dist/src/usecases/create.js';

import { database } from '../../testdata/mockDatabase.testdata.mjs';

describe('Failure cases', () => {
  test('It should fail if started with no item or database', async () => {
    await expect(useCaseCreate()).rejects.toThrow();
  });

  test('It should fail if started with no item', async () => {
    await expect(useCaseCreate(null, {})).rejects.toThrow();
  });

  test('It should fail if started with no database', async () => {
    await expect(useCaseCreate({}, null)).rejects.toThrow();
  });

  test('It should fail if provided with empty item', async () => {
    await expect(useCaseCreate({}, {})).rejects.toThrow();
  });
});

describe('Success cases', () => {
  test('It should succeed if started with valid input data', async () => {
    await expect(
      useCaseCreate(
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
