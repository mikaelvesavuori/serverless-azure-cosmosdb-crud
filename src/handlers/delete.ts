import { Context, HttpRequest } from '@azure/functions';

import { deleteFromDb } from '../app/Delete/delete';
import { deleteMethodError } from '../infra/Errors/errorMessages';
import { deleteQueryError } from '../infra/Errors/errorMessages';

/**
 * @description The handler for the "delete" function
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export async function handler(context: Context, req: HttpRequest): Promise<void> {
  if (req.method !== 'DELETE') {
    context.res = {
      status: 400,
      body: deleteMethodError
    };
    return;
  }

  if (!req.query.id) {
    context.res = {
      status: 400,
      body: deleteQueryError
    };
    return;
  }

  const response = await deleteFromDb({
    id: req.query.id
  });

  context.res = {
    body: response
  };
}
