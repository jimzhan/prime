import { controller } from '@foal/core';

import { AuthController } from './auth/views';

export class AppController {
  subControllers = [
    controller('/auth', AuthController),
  ];
}
