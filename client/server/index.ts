import { parse } from 'url';
import { createServer } from 'http';
import next from 'next';

import { PORT, NODE_ENV, APP_ENV } from '../config/env';

const app = next({
  dev: true,
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    if (req.url) {
      // parse is deprecated, but the WHATWG URL API does not comply with the handle API
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }
  })
    .listen(PORT, () => {
      console.info(`[${NODE_ENV} / ${APP_ENV}] Server running on http://localhost:${PORT}`);
    });
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
