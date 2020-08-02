import { requestValidator } from '../../../../dist/src/frameworks/request/requestValidator.js';

import { ValidRequestData, InvalidRequestData, ValidValidatorData, ValidReqValResponse } from '../../../testdata/requestValidator.testdata.mjs';

describe('Failure cases', () => {
  test('It should reject if missing request and validator', async () => {
    await expect(requestValidator()).rejects.toBeTruthy();
  });

  test('It should reject if missing request', async () => {
    await expect(requestValidator(null, ValidValidatorData)).rejects.toBeTruthy();
  });

  test('It should reject if missing validator', async () => {
    await expect(requestValidator(ValidRequestData, null)).rejects.toBeTruthy();
  });

  test('It should reject if having POST method but missing a body', async () => {
    await expect(
      requestValidator(
        {
          method: 'POST',
          body: null
        },
        ValidValidatorData
      )
    ).rejects.toBeTruthy();
  });

  test('It should reject if being passed a non-matching request method', async () => {
    await expect(requestValidator(InvalidRequestData, ValidValidatorData)).rejects.toBeTruthy();
  });
});

describe('Success cases', () => {
  test('It should validate a request when given a validator and matching request', async () => {
    await expect(requestValidator(ValidRequestData, ValidValidatorData)).resolves.toEqual(expect.objectContaining(ValidReqValResponse));
  });
});
