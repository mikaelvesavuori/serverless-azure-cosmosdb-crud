import { RequestValidatorRequest, RequestValidatorValidator, RequestValidatorResult } from '../../contracts/Request/Request';

import { allowedFields } from '../../config';

import { checkValidity } from './checkValidity';
import { getValidArgs } from './getValidArgs';
import { remapCleanedEntries } from './remapCleanedEntries';

/**
 * @description HTTP request validator. Takes in a request object and a validator object to verify against.
 */
export function requestValidator(request: RequestValidatorRequest, validator: RequestValidatorValidator): Promise<RequestValidatorResult> {
  return new Promise((resolve, reject) => {
    if (!request || !validator) reject('Missing request and/or validator!');

    // @ts-ignore
    const args: any = request.method.toUpperCase() === 'POST' ? request.body : request.query;

    const validity = checkValidity(request, validator, args);
    console.log(validity);
    const { rejected, message } = validity;
    if (rejected) reject(message);

    const validArgs = getValidArgs(args, allowedFields);
    const validatedArguments = remapCleanedEntries(validArgs);

    resolve(validatedArguments);
  });
}
