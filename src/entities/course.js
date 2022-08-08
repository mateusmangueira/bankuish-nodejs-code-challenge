import { randomUUID } from 'node:crypto';

export default class Course {
  constructor({ userId, desiredCourse, requiredCourse, order }) {
    this.courseId = randomUUID();
    this.userId = userId;
    this.desiredCourse = desiredCourse;
    this.requiredCourse = requiredCourse;
    this.order = order;
  }
}