import { DatabaseError } from '../constants/errors.js';
import { COURSE_MODEL } from '../constants/messages.js';
import { createMyOwnConnection, SUPER_KEY } from './default.js';

const conn = await createMyOwnConnection();
export class CourseModel {
  static async getAll() {
    let data;
    try {
      [data] = await conn.query(
        `SELECT c.id, c.course_name AS name, t.name_type AS type FROM courses c INNER JOIN type_courses t ON c.course_type = t.id ORDER BY c.course_name;`,
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
        `SELECT c.id, c.course_name AS name, t.name_type AS type FROM courses c INNER JOIN type_courses t ON c.course_type = t.id WHERE c.id = ?;`,
        [id],
      );
      if (data.length === 0) return new DatabaseError(COURSE_MODEL.FOUND);
    } catch (err) {
      console.log(err);
      throw new DatabaseError(COURSE_MODEL.GETTING);
    }
    return data[0];
  }
}
