import express from 'express';
import { apiRouter } from './routes/apiRoutes.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.locals.ready = true;
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'img-src': ["'self'", 'data:', 'https://images.scrydex.com'],
      },
    },
  })
);
app.use(compression());

app.get('/healthz', (req, res) => res.status(200).send('ok'));
app.get('/readyz', (req, res) => {
  if (req.app.locals.ready) {
    res.status(200).json({ status: 'ready' });
  } else {
    res.status(503).json({ status: 'not ready' });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  '/api',
  rateLimit({
    windowMs: 60000,
    limit: Number(process.env.RATE_LIMIT) || 120,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.use('/', apiRouter);

app.use((req, res) => res.status(404).json({ error: 'Not found' }));
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
