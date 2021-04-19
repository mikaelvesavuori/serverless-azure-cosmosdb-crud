import { useCaseRead } from '../../../src/usecases/read';

import { database } from '../../testdata/mockDatabase.testdata';

describe('Failure cases', () => {
  test('It should fail if started with no item or database', async () => {
    // @ts-ignore
    await expect(useCaseRead()).rejects.toThrow();
  });

  test('It should fail if started with no item', async () => {
    // @ts-ignore
    await expect(useCaseRead(null, {})).rejects.toThrow();
  });

  test('It should fail if started with no database', async () => {
    // @ts-ignore
    await expect(useCaseRead({}, null)).rejects.toThrow();
  });

  test('It should fail if provided with no ID', async () => {
    // @ts-ignore
    await expect(useCaseRead({}, {})).rejects.toThrow();
  });
});

describe('Success cases', () => {
  test('It should succeed if started with valid input data', async () => {
    await expect(
      useCaseRead(
        {
          id: '278903'
        },
        database as any
      )
    ).resolves.toBeTruthy();
  });
});
