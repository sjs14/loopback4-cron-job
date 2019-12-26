import { LoopbackDemoApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

import { CronController } from './controllers/cron.controller'
import { Cron } from "./services/corn-joib";

export { LoopbackDemoApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new LoopbackDemoApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  // Instanciate CronController
  const cronController = app.controller(CronController);

  // Get Instance
  const cronControllerInstance = await cronController.getValue(app);

  // Inject by constructor
  const cron = new Cron(cronControllerInstance);

  // Invoke method
  cron.start();

  return app;
}
