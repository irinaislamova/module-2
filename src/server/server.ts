import express from 'express';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

import { logger } from './utils';
import { Header } from '../shared';
import IndexHTML from './index.template';

const app = express();

// CONFIGURATION
app.use('/static', express.static('./dist/app'));

app.get('/', (req: express.Request, res: express.Response) => {
  const HeaderElement = createElement(Header);

  res.send(
    IndexHTML(
      renderToString(HeaderElement),
    ),
  );
});

const host = process.env.APP_HOST || 'localhost';
const port = Number(process.env.APP_PORT) || 3000;

app.listen(port, host, async () => {
  logger.info(`Ready on http://${host}:${port} ${process.env.NODE_ENV} mode`);
});
