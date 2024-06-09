import crypto from 'crypto';
import { DatabaseError } from '../constants/errors.js';
import { createMyOwnConnection } from './default.js';
import { REGISTER_MODEL } from '../constants/messages.js';

const conn = await createMyOwnConnection();
export class RegisterModel {
  static async create(input) {
    const { user, register_start, course } = input;
    const id = crypto.randomUUID();
    let data;
    try {
      [data] = await conn.query(
        `INSERT INTO registers(id,user,register_start,course) VALUES (UUID_TO_BIN(?),?,?,?);`,
        [id, user, register_start, course],
      );
      if (data.length === 0) return new DatabaseError(REGISTER_MODEL.FOUND);
    } catch (err) {
      console.log(err);
      throw new DatabaseError(REGISTER_MODEL.GETTING);
    }
    return id;
  }
  static async get(input) {
    const { user, course } = input;
    let data;
    try {
      [data] = await conn.query(
        `SELECT id,register_start, register_end FROM registers WHERE user = ? AND course = ?;`,
        [user, course],
      );
      if (data.length === 0) return new DatabaseError(REGISTER_MODEL.FOUND);
    } catch (err) {
      console.log(err);
      throw new DatabaseError(REGISTER_MODEL.GETTING);
    }
    return data[0];
  }
}
