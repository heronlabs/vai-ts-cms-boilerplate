import 'reflect-metadata';

import {Callback, Context, Handler} from 'aws-lambda';
import serverless from 'serverless-http';

let server: Handler;

const bootstrap = async () => {
  const strapi = require('@strapi/strapi');
  strapi({dir: process.env.LAMBDA_TASK_ROOT});
  await strapi.load();
  await strapi.postListen();
  strapi.server.mount();
  return serverless(strapi.server.app);
};

export const handler: Handler = async (
  event: unknown,
  context: Context,
  callback: Callback
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
