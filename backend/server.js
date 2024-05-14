import { createApp } from './app.js';
import dotenv from 'dotenv';

const log = console.log;
const app = createApp();
if (process.env.environment !== 'production') {
  dotenv.config();
}

const PORT = process.env.PORT ?? 3000;
const HOST = process.env.HOST ?? 'localhost';

app.listen(PORT, HOST, () =>
  log(
    `Servidor escuchando el puerto: ${PORT} host: ${HOST}. http://${HOST}:${PORT}/`,
  ),
);
