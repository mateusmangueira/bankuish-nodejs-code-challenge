import { randomUUID } from 'node:crypto';

export default class User {
  constructor({ courses }) {
    this.userId = randomUUID();
    this.courses = [courses]
  }
}