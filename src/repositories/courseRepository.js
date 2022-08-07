import db from './../config/database.js';

export default class CourseRepository {
  constructor() {
    this.db = db;
  }

  async find() {
    const query = 'SELECT * FROM courses';
    const result = await this.db.query(query);
    return result.rows;
  }

  async create(data) {
    const { desiredCourse, requiredCourse } = data;
    const query = "INSERT INTO courses (desiredCourse, requiredCourse) VALUES ($1, $2, $3)"
    const result = await this.db.query(query, [desiredCourse, requiredCourse]);
    return result.rows;
  }
}