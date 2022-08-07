export default class CourseService {
  constructor({
    courseRepository,
  }) {
    this.courseRepository = courseRepository;
  }

  async find() {
    return await this.courseRepository.find();
  }

  async create(data) {
    return await this.courseRepository.create(data);
  }

  async update(data) {
    return await this.courseRepository.update(data);
  }

  async delete(data) {
    return await this.courseRepository.delete(data);
  }
}