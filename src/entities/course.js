import { randomUUID } from 'node:crypto';

export default class Course {
  constructor({ desiredCourse, requiredCourse }) {
    this.courseId = randomUUID();
    this.desiredCourse = desiredCourse;
    this.requiredCourse = requiredCourse;
  }
}