export class ContentController {
  constructor(tm, stm) {
    this.tm = tm;
    this.stm = stm;
  }
  get = async (req, res) => {
    const topics = await this.tm.get(req.params);
    let content = [];
    for (let el of topics) {
      let subTopics = await this.stm.get(el._id);
      content.push({ ...el, subTopics });
    }
    return res.status(201).json({ content });
  };
  getPartial = async (req, res) => {
    const topics = await this.tm.get(req.params);
    let content = [];
    for (let el of topics) {
      let subTopics = await this.stm.getPartial(el._id);
      content.push({ ...el, subTopics });
    }
    console.log('Content', content);
    return res.status(201).json({ content });
  };
  getLesson = async (req, res) => {
    const { id } = req.params;
    const result = await this.stm.getById(id);
    return res.status(201).json(result);
  };
}
