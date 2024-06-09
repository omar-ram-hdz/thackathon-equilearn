import { getMongoConnection } from './default_mongodb.js';
import { SUBTOPIC_MODEL } from '../constants/messages.js';
import { ObjectId } from 'mongodb';

const c = await getMongoConnection('subtopics');
export class SubTopicModel {
  static async get(topic) {
    let data;
    const id = new ObjectId(topic);
    try {
      data = await c.find({ topic: id }).toArray();
    } catch (err) {
      console.log(err);
      throw new DatabaseError(SUBTOPIC_MODEL.GETTING);
    }
    return data;
  }
  static async getById(subTopic) {
    const id = new ObjectId(subTopic);
    let data;
    try {
      data = await c.findOne({ _id: id });
    } catch (err) {
      console.log(err);
      throw new DatabaseError(SUBTOPIC_MODEL.GETTING);
    }
    return data;
  }
  static async getPartial(topic) {
    let data;
    const id = new ObjectId(topic);
    try {
      data = await c.find({ topic: id }).toArray();
    } catch (err) {
      console.log(err);
      throw new DatabaseError(SUBTOPIC_MODEL.GETTING);
    }
    let aux = data.map((el) => {
      return {
        _id: el._id,
        topic: el.topic,
        name: el.name,
        dif: el.dif,
      };
    });
    return aux;
  }
}
/* 
{
  _id,
  topic,
  name,
  dif,
  content = [
    {
      title,
      content,
      img,
      options = [True_options, ...falseOptions === 3]
    }
  ]
}
course_pensamiento_matematico_t1_st1_i1
course + coursename + theme + sub theme + numberimage
*/
