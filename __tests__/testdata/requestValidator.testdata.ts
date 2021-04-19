export const ValidRequestData = {
  method: 'POST',
  body: { category: 'asdf', id: 'j34hs7' }
};

export const InvalidRequestData = {
  method: 'ASDF',
  body: { category: 'asdf' }
};

export const ValidValidatorData = {
  requiredMethod: 'POST',
  requiredArgs: ['category']
};

export const NoReqArgsValidatorData = {
  requiredMethod: 'POST',
  requiredArgs: []
};

export const ValidReqValResponse = { category: 'asdf' };
