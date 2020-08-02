import { getValidArgs } from '../../../../dist/src/frameworks/request/getValidArgs.js';

import { ValidRequestData } from '../../../testdata/requestValidator.testdata.mjs';

describe('Success cases', () => {
  test('It should return an empty array if given no arguments', () => {
    expect(getValidArgs()).toEqual(expect.arrayContaining([]));
  });

  test('It should return an array with an object that is passed through, if no allowed fields are specified', () => {
    expect(getValidArgs(ValidRequestData.body)).toEqual(expect.arrayContaining([{ category: 'asdf' }]));
  });

  test('It should return an array of objects that only contains a single allowed field', () => {
    expect(getValidArgs(ValidRequestData.body, ['category'])).toEqual(expect.arrayContaining([{ category: 'asdf' }]));
  });

  test('It should return an array of objects that only contains multiple allowed fields', () => {
    expect(getValidArgs(ValidRequestData.body, ['category', 'id'])).toEqual(expect.arrayContaining([{ category: 'asdf' }, { id: 'j34hs7' }]));
  });
});
