// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class CronController {
  constructor() { }

  public start() {
    const d = new Date();
    console.log(d);
  }
}
