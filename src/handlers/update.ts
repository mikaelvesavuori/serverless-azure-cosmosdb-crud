import { Context, HttpRequest } from '@azure/functions';

import { update } from '../app/Update/update';
import { updateMethodError, updateQueryError } from '../infra/Errors/errorMessages';

/**
 * @description The handler for the "update" function
 * @param context - Context object
 * @param req - Incoming HTTP request
 */
export async function handler(context: Context, req: HttpRequest): Promise<void> {
  // Check HTTP request for baseline requirements
  if (req.method !== 'PATCH') {
    context.res = {
      status: 400,
      body: updateMethodError
    };
    return;
  }

  if (!req.query.id) {
    context.res = {
      status: 400,
      body: updateQueryError
    };
    return;
  }

  // Here's where the actual application logic starts happening
  const response = await update(
    {
      id: req.query.id,
      category: req.query.category,
      name: req.query.name,
      description: req.query.description
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
