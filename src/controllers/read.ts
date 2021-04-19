import { Context, HttpRequest } from '@azure/functions';

import { database } from '../index';

import { RequestValidatorResult } from '../contracts/Request/Request';
import { ItemDatabase } from '../contracts/ItemDatabase/ItemDatabase';
import { ItemRead } from '../contracts/Item/Item';

import { useCaseRead } from '../usecases/read';

import { requestValidator } from '../frameworks/request/requestValidator';

/**
 * @description The controller for the "read" use case
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export async function readController(context: Context, req: HttpRequest): Promise<any> {
  try {
    if (!context || !req) throw new Error('No context and/or request object received!');

    return requestValidator(req, {
      requiredMethod: 'GET',
      requiredArgs: []
    })
      .then(async (requestBody: RequestValidatorResult) => await useCaseRead(requestBody as ItemRead, database as ItemDatabase))
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
  } catch (error) {
    return {
      status: 400,
      body: error.toString()
    };
  }
}
