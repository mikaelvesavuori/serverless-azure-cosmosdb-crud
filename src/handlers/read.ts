import { Context, HttpRequest } from '@azure/functions';

import { read } from '../app/Read/read';
import { readMethodError } from '../infra/Errors/errorMessages';

/**
 * @description The handler for the "read" function
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export async function handler(context: Context, req: HttpRequest): Promise<void> {
  if (req.method !== 'GET') {
    context.res = {
      status: 400,
      body: readMethodError
    };
    return;
  }

  const id = (() => {
    if (req.query.id) {
      return req.query.id;
    } else return '';
  })();

  const response = await read({
    id
  });

  context.res = {
    body: response
  };
}
