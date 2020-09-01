import * as http from 'http';
import { createApp } from '@foal/core';

import { AppController } from './apps';

async function main() {
  const app = createApp(AppController);
  const httpServer = http.createServer(app);
  const port = 3000;

  httpServer.listen(port, () => {
    console.log(`Start listening on port ${port}...`);
  });
}

main()
  .catch(err => { console.error(err); process.exit(1); });
