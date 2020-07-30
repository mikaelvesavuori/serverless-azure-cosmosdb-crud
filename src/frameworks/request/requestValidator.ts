import {
  RequestValidatorRequest,
  RequestValidatorValidator,
  RequestValidatorResult
} from '../../app/contracts/Request/Request';

/**
 * @description HTTP request validator. Takes in a request object and a validator object to verify against.
 */
export function requestValidator(
  request: RequestValidatorRequest,
  validator: RequestValidatorValidator
): Promise<RequestValidatorResult> {
  return new Promise((resolve, reject) => {
    if (!request || !validator) reject('Missing request and/or validator!');

    // Ensure we have a body for any POST requests
    if (validator.requiredMethod.toUpperCase() === 'POST' && !request.body)
      reject('Missing body for POST request!');

    // @ts-ignore
    const args: any = request.method.toUpperCase() === 'POST' ? request.body : request.query;

    // Check if arguments are required, else send back whatever came in
    if (validator.requiredArgs.length === 0) resolve(args);

    // Check for correct request method
    if ((request.method && request.method.toUpperCase()) !== validator.requiredMethod.toUpperCase())
      reject(`Incorrect method used. Must be "${validator.requiredMethod}"!`);

    // Ensure we have all the right arguments
    if (!validator.requiredArgs.every((arg) => Object.keys(args).includes(arg)))
      reject(
        `All required body arguments were not present. Must include fields "${validator.requiredArgs}"!`
      );

    // You can approach this in several ways:
    // 1. Filter out only the required arguments...
    // 2. ...or anything that is OK according to the interface (we'll do it this way)
    const validArgs = Object.entries(args)
      .filter((x) => allowedFields.includes(x[0]))
      //.filter((x) => validator.requiredArgs.includes(x[0]))
      .map((x) => {
        return {
          [x[0]]: x[1]
        };
      });

    // Send back cleaned list
    let validatedArguments: { [index: string]: string } = {};
    validArgs.map((a) => {
      const key: any = Object.keys(a)[0];
      const value: any = Object.values(a)[0];
      validatedArguments[key] = value;
    });

    resolve(validatedArguments);
  });
}

const allowedFields = ['category', 'name', 'description', 'id'];
