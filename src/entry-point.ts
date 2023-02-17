import 'reflect-metadata';

import strapi from '@strapi/strapi';
import {Callback, Context, Handler} from 'aws-lambda';
import serverless from 'serverless-http';

let server: Handler;

const bootstrap = async () => {
  const distDir = process.env.LAMBDA_TASK_ROOT && process.cwd();

  const app = strapi({distDir});

  return serverless(app.server.app);
};

export const handler: Handler = async (
  event: unknown,
  context: Context,
  callback: Callback
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
