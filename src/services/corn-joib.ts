import { CronController } from "../controllers/cron.controller";
const cron = require('node-cron')
export class Cron {
  constructor(
    protected cronController: CronController,
  ) {
  }

  async start() {
    this.eachMinute();
  }

  private async eachMinute() {
    console.log('Start Cron Jobs');

    cron.schedule('*/2 * * * * *', () => {
      const d = new Date();
      console.log(d);
      this.cronController.start()
    });
  }
}
