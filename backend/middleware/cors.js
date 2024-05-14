import cors from 'cors';

const ACCEPTED_ORIGINS = ['http://localhost:8080', 'http://192.168.1.77:3000'];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error('Origen no aceptado por CORS'));
    },
  });
