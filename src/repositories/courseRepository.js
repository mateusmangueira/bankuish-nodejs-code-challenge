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
    const { desiredCourse, requiredCourse, order } = data;
    const course = await this.prismaClient.course.create({
      data: {
        desiredCourse,
        requiredCourse,
        order
      },
    });
    return course;
  }

  async delete(data) {
    const { courseId } = data;
    const deletedCourse = await this.prismaClient.course.delete({
      where: {
        courseId,
      },
    });
    return deletedCourse;
  }

  async update(data) {
    const { courseId, desiredCourse, requiredCourse, order, userId } = data;
    const course = await this.prismaClient.course.findUniqueOrThrow({
      where: {
        courseId,
      },
    });

    if (course.order <= order) {
      throw new Error("You can't enroll to this course, must finish current course first!");
    }
    const updatedCourse = await this.prismaClient.course.update({
      where: {
        courseId,
      },
      data: {
        desiredCourse,
        requiredCourse,
        order,
        userId,
      },
    });
    return updatedCourse;
  }
}