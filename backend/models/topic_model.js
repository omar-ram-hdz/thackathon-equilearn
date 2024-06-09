import { getMongoConnection } from './default_mongodb.js';
import { TOPIC_MODEL } from '../constants/messages.js';
import { DatabaseError } from '../constants/errors.js';

const c = await getMongoConnection('topics');
export class TopicModel {
  static async get(input) {
    const { id } = input;
    let data;
    try {
      data = await c.find({ course: id }).toArray();
    } catch (err) {
      console.log(err);
      throw new DatabaseError(TOPIC_MODEL.GETTING);
    }
    return data;
  }
}
/* 
  {
    _id,
    name,
    course,
  }
  Aritmética


*/
