import { prismaClient } from "../database/prisma.client.js";

export default class CourseRepository {
  constructor() {
    this.prismaClient = prismaClient;
  }

  async find() {
    const courses = await this.prismaClient.course.findMany({
      orderBy: {
        order: "asc",
      }
    });
    return courses;
  }

  async create(data) {
    const { desiredCourse, requiredCourse } = data;
    const course = await this.prismaClient.course.create({
      data: {
        desiredCourse,
        requiredCourse,
      },
    });
    return course;
  }
}