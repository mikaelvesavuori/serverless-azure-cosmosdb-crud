import { itemValidator } from '../../../../dist/src/entities/Item/itemValidator.js';

describe('Failure cases', () => {
  test('It should return false if given no item', () => {
    expect(itemValidator()).toBe(false);
  });

  test('It should return false if given invalid/incomplete object', () => {
    expect(
      itemValidator({
        category: 'asdf'
      })
    ).toBe(false);
  });
});

describe('Success cases', () => {
  test('It should return true if given valid object', () => {
    expect(
      itemValidator({
        category: 'asdf',
        name: 'asdf',
        description: 'asdf'
      })
    ).toBe(true);
  });
});
