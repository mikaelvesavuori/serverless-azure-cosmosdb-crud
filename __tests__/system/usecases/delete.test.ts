import { useCaseDelete } from '../../../src/usecases/delete';

import { database } from '../../testdata/mockDatabase.testdata';

describe('Failure cases', () => {
  test('It should fail if started with no item or database', async () => {
    // @ts-ignore
    await expect(useCaseDelete()).rejects.toThrow();
  });

  test('It should fail if started with no item', async () => {
    // @ts-ignore
    await expect(useCaseDelete(null, {})).rejects.toThrow();
  });

  test('It should fail if started with no database', async () => {
    // @ts-ignore
    await expect(useCaseDelete({}, null)).rejects.toThrow();
  });

  test('It should fail if provided with no ID', async () => {
    // @ts-ignore
    await expect(useCaseDelete({}, {})).rejects.toThrow();
  });
});

describe('Success cases', () => {
  test('It should succeed if started with valid input data', async () => {
    await expect(
      useCaseDelete(
        {
          id: '278903'
        },
        database as any
      )
    ).resolves.toBeTruthy();
  });
});
