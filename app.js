import express from 'express';
import { apiRouter } from './routes/apiRoutes.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', apiRouter);
app.use((req, res) => {
  res.status(200).json({
    message: 'Welcome to the Pokémon API! Use /api to access the endpoints.',
  });
});

export default app;
