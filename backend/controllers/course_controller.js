export class CourseController {
  constructor(courseModel) {
    this.courseModel = courseModel;
  }
  getAll = async (req, res) => {
    const result = await this.courseModel.getAll(req.params);
    return res.status(201).json({ courses: result });
  };
  get = async (req, res) => {
    const result = await this.courseModel.get(req.params);
    return res.status(201).json({ course: result });
  };
}
