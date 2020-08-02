import { RequestValidatorRequest, RequestValidatorValidator, RequestValidity } from '../../app/contracts/Request/Request';

/**
 * @description HTTP request validator. Takes in a request object and a validator object to verify against.
 */
export const checkValidity = (request: RequestValidatorRequest, validator: RequestValidatorValidator, args: any): RequestValidity => {
  let validity = {
    rejected: false,
    message: '',
    args: args
  };

  // Check if arguments are required, else send back whatever came in
  if (validator.requiredArgs.length === 0) return validity;

  // Ensure we have a body for any POST requests
  if (validator.requiredMethod.toUpperCase() === 'POST' && !request.body) {
    validity.rejected = true;
    validity.message = 'Missing body for POST request!';
  }

  // Check for correct request method
  if ((request.method && request.method.toUpperCase()) !== validator.requiredMethod.toUpperCase()) {
    validity.rejected = true;
    validity.message = `Incorrect method used. Must be "${validator.requiredMethod}"!`;
  }

  // Ensure we have all the right arguments
  if (!validator.requiredArgs.every((arg) => Object.keys(args).includes(arg))) {
    validity.rejected = true;
    validity.message = `All required body arguments were not present. Must include fields "${validator.requiredArgs}"!`;
  }

  return validity;
};
