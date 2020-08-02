import { Context, HttpRequest } from '@azure/functions';

import { database } from '../../main';

import { useCaseUpdate } from '../../usecases/update';

import { requestValidator } from '../../frameworks/request/requestValidator';
import { RequestValidatorResult } from '../contracts/Request/Request';

import { ItemDatabase } from '../contracts/ItemDatabase/ItemDatabase';
import { ItemUpdate } from '../contracts/Item/Item';

/**
 * @description The controller for the "update" use case
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export async function updateController(context: Context, req: HttpRequest): Promise<any> {
  return requestValidator(
    {
      method: req.method,
      body: req.body,
      query: req.query
    },
    {
      requiredMethod: 'PATCH',
      requiredArgs: ['id']
    }
  )
    .then(async (requestBody: RequestValidatorResult) => await useCaseUpdate(requestBody as ItemUpdate, database as ItemDatabase))
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
