import { Context, HttpRequest } from '@azure/functions';

import { database } from '../../main';

import { useCaseCreate } from '../../usecases/create';

import { requestValidator } from '../../frameworks/request/requestValidator';
import { RequestValidatorResult } from '../contracts/Request/Request';

import { ItemDatabase } from '../contracts/ItemDatabase/ItemDatabase';
import { ItemCreate } from '../contracts/Item/Item';

/**
 * @description The controller for the "create" use case
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export async function createController(context: Context, req: HttpRequest): Promise<any> {
  if (!req) throw new Error('No request object received!');

  return requestValidator(
    {
      method: req.method,
      body: req.body
    },
    {
      requiredMethod: 'POST',
      requiredArgs: ['category', 'name', 'description']
    }
  )
    .then(
      async (requestBody: RequestValidatorResult) =>
        await useCaseCreate(requestBody as ItemCreate, database as ItemDatabase)
    )
    .then((response: Promise<any>) => {
      return {
        body: response
      };
    })
    .catch((error: Error) => {
      return {
        status: 400,
        body: error.toString()
      };
    });
}
