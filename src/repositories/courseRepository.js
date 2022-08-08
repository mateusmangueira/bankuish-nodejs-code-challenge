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
    const { userId, desiredCourse, requiredCourse, order } = data;
    const course = await this.prismaClient.course.create({
      data: {
        userId,
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
    const { courseId, desiredCourse, requiredCourse, userId } = data;
    const course = await this.prismaClient.course.findUniqueOrThrow({
      where: {
        courseId,
      },
    });

    const updatedCourse = await this.prismaClient.course.update({
      where: {
        courseId,
      },
      data: {
        desiredCourse,
        requiredCourse,
        userId,
      },
    });

    if (course.order < updatedCourse) {
      throw new Error("You cannot enroll for this course, must finish current course first");
    }

    return updatedCourse;
  }
}