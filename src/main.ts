/**
 * The "main" file sets up any infra and glue that the application will need.
 * In our case, we are mostly interested in having access to the right type of
 * database depending on our environment and needs.
 */
import { configApi, configCli } from './config';
import { createDb } from './frameworks/database/createDb';

let database: any;

function main(env: string) {
  const databaseName = (() => {
    //console.log('Dev Environment?', env);
    process.env['AZ_CRUD_DEV'] = env;

    const db = (() => {
      if (process.env.AZ_CRUD_DEV === 'true') {
        return configCli.database.toString();
      } else return configApi.database.toString();
    })();

    return db.toString();
  })();

  database = createDb({ databaseName });
}

const DEV_ENV = process.env.AZ_CRUD_DEV || 'false';
main(DEV_ENV);

export { database };
