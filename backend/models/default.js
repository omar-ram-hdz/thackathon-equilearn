import { createConnection } from 'mysql2/promise';
import 'dotenv/config';

export const createMyOwnConnection = async () => {
  const DEFAULT_CONFIG = {
    host: 'localhost',
    user: process.env.DATABASE_USER,
    port: 3306,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  };
  const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;
  const conn = await createConnection(connectionString);
  return conn;
};

export const SUPER_KEY = process.env.SUPER_KEY;
