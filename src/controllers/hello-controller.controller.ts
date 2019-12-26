// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { get } from '@loopback/rest';
export class HelloController {
  @get('/hello')
  hello(): object {
    return {
      error: -11,
      data: [1, 2, 3]
    };
  }
}
