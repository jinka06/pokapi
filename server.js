import app from './app.js';

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  app.locals.ready = false;
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 10000).unref();
});
