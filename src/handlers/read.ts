import { Context, HttpRequest } from '@azure/functions';

import { read } from '../app/Read/read';
import { readMethodError } from '../infra/Errors/errorMessages';

/**
 * @description The handler for the "read" function
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export async function handler(context: Context, req: HttpRequest): Promise<void> {
  // Check HTTP request for baseline requirements
  if (req.method !== 'GET') {
    context.res = {
      status: 400,
      body: readMethodError
    };
    return;
  }

  // Here's where the actual application logic starts happening
  const response = await read(
    {
      id: getId(req)
    },
    {
      databaseName: 'CosmosDB'
    }
  );

  // Set context
  context.res = {
    body: response
  };
}

const getId = (req: HttpRequest) => (req.query.id ? req.query.id : '');
