export const ValidRequestData = {
  method: 'POST',
  body: { category: 'asdf' }
};

export const InvalidRequestData = {
  method: 'ASDF',
  body: { category: 'asdf' }
};

export const ValidValidatorData = {
  requiredMethod: 'POST',
  requiredArgs: ['category']
};

export const ValidReqValResponse = { category: 'asdf' };
