import { randomUUID } from 'node:crypto';

export default class Course {
  constructor({ desiredCourse, requiredCourse, order, userId }) {
    this.courseId = randomUUID();
    this.desiredCourse = desiredCourse;
    this.requiredCourse = requiredCourse;
    this.order = order;
    this.userId = userId;
  }
}