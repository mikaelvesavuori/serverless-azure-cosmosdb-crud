import { useCaseCreate } from '../../../src/usecases/create';

import { database } from '../../testdata/mockDatabase.testdata';

describe('Failure cases', () => {
  test('It should fail if started with no item or database', async () => {
    // @ts-ignore
    await expect(useCaseCreate()).rejects.toThrow();
  });

  test('It should fail if started with no item', async () => {
    // @ts-ignore
    // @ts-ignore
    await expect(useCaseCreate(null, {})).rejects.toThrow();
  });

  test('It should fail if started with no database', async () => {
    // @ts-ignore
    await expect(useCaseCreate({}, null)).rejects.toThrow();
  });

  test('It should fail if provided with empty item', async () => {
    // @ts-ignore
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
        database as any
      )
    ).resolves.toBeTruthy();
  });
});
