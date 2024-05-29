import crypto from 'crypto';
import { DatabaseError } from '../constants/errors.js';
import { USER_MODEL } from '../constants/messages.js';
import { createMyOwnConnection, SUPER_KEY } from './default.js';

const conn = await createMyOwnConnection();
export class UserModel {
  static async get(input) {
    const { email, pass } = input;
    let data;
    try {
      [data] = await conn.query(
        `SELECT BIN_TO_UUID(id), full_name FROM users WHERE email = ? AND pass = AES_ENCRYPT(?,'${SUPER_KEY}');`,
        [email, pass],
      );
      if (data.length === 0) return new DatabaseError(USER_MODEL.FOUND);
    } catch (err) {
      console.log(err);
      throw new DatabaseError(USER_MODEL.GETTING);
    }
    return data[0];
  }

  static async getById(id) {
    let data;
    try {
      [data] = await conn.query(
        `SELECT full_name, email FROM users WHERE UUID_TO_BIN(?) = id;`,
        [id],
      );
      if (data.length === 0) return new DatabaseError(USER_MODEL.FOUND);
    } catch (err) {
      console.log(err);
      throw new DatabaseError(USER_MODEL.GETTING);
    }
    return data[0];
  }

  static async create(input) {
    const { full_name, email, pass } = input;
    const uuid = crypto.randomUUID();
    let data;
    try {
      [data] = await conn.query(
        `INSERT INTO users(id,full_name,email,pass) VALUES(UUID_TO_BIN(?),?,?,AES_ENCRYPT(?));`,
        [uuid, full_name, email, pass],
      );
    } catch (err) {
      console.log(err);
      throw new DatabaseError(USER_MODEL.CREATING);
    }
    return uuid;
  }
}
