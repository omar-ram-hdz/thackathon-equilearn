import { DatabaseError } from '../constants/errors.js';
import { COURSE_MODEL } from '../constants/messages.js';
import { createMyOwnConnection, SUPER_KEY } from './default.js';

const conn = await createMyOwnConnection();
export class CourseModel {
  static async getAll(input) {
    const { grade } = input;
    let data;
    try {
      [data] = await conn.query(
        `SELECT id, course_name as name, image FROM courses WHERE grade = ? ORDER BY course_name;`,
        [grade],
      );
      if (data.length === 0) return new DatabaseError(COURSE_MODEL.FOUND);
    } catch (err) {
      console.log(err);
      throw new DatabaseError(COURSE_MODEL.GETTING);
    }
    return data;
  }
  static async get(input) {
    const { id } = input;
    let data;
    try {
      [data] = await conn.query(
        `SELECT course_name as name FROM courses WHERE id = ?;`,
        [id],
      );
      if (data.length === 0) return new DatabaseError(COURSE_MODEL.FOUND);
    } catch (err) {
      console.log(err);
      throw new DatabaseError(COURSE_MODEL.GETTING);
    }
    console.log('Get name', data);
    return data[0].name;
  }
}
