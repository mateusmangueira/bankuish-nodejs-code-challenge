import { prismaClient } from "../database/prisma.client.js";

export default class UserRepository {
  constructor() {
    this.prismaClient = prismaClient;
  }

  async find() {
    const user = await this.prismaClient.user.findMany({
      select: {
        userId: true,
        courses: true,
      },
    });
    return user;
  }

  async create() {
    const user = await this.prismaClient.user.create({
      data: {},
    });
    return user;
  }

  async update(data) {
    const { userId, courses } = data;
    const user = await this.prismaClient.user.update({
      where: {
        userId,
      },
      data: {
        courses,
      },
    });

    return user;
  }

  async delete(data) {
    const { userId } = data;
    const user = await this.prismaClient.user.delete({
      where: {
        userId,
      },
    });
    return user;
  }
}