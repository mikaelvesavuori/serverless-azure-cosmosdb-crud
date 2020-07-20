import { Context, HttpRequest } from '@azure/functions';

import { create } from '../app/Create/create';
import { createMethodError, createQueryError } from '../infra/Errors/errorMessages';

/**
 * @description The handler for the "create" function
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export async function handler(context: Context, req: HttpRequest): Promise<void> {
  // Check HTTP request for baseline requirements
  if (req.method !== 'POST') {
    context.res = {
      status: 400,
      body: createMethodError
    };
    return;
  }

  if (!context.req.body) {
    context.res = {
      status: 400,
      body: createQueryError
    };
    return;
  }

  if (!context.req.body.category || !context.req.body.name || !context.req.body.description) {
    context.res = {
      status: 400,
      body: createQueryError
    };
    return;
  }

  // Here's where the actual application logic starts happening
  const response = await create(
    {
      category: context.req.body.category,
      name: context.req.body.name,
      description: context.req.body.description
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
