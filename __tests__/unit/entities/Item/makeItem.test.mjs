import { makeItem } from '../../../../dist/src/entities/Item/index.js';

describe('Failure cases', () => {
  test('It should return false if given no item', async () => {
    await expect(makeItem()).rejects.toBeTruthy();
  });

  test('It should return false if given invalid/incomplete object', async () => {
    await expect(
      makeItem({
        category: 'asdf'
      })
    ).rejects.toBeTruthy();
  });
});

describe('Success cases', () => {
  test('It should return true if given valid object', async () => {
    await expect(
      makeItem({
        category: 'asdf',
        name: 'asdf',
        description: 'asdf'
      })
    ).resolves.toBeTruthy();
  });
});
