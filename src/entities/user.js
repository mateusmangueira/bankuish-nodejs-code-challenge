import { randomUUID } from 'node:crypto';

export default class User {
  constructor({ course }) {
    this.userId = randomUUID();
    this.course = [course];
  }
}