import * as http from 'http';
import { createApp } from '@foal/core';

import { AppController } from './apps';
import settings from './settings'

async function main() {
  const app = createApp(AppController);
  const httpServer = http.createServer(app);

  httpServer.listen(settings.port, () => {
    console.log(`Start listening on port ${settings.port}...`);
  });
}

main()
  .catch(err => { console.error(err); process.exit(1); });
