import { prismaClient } from "../database/prisma.client.js";
import jwt from "jsonwebtoken";

export default class UserRepository {
  constructor() {
    this.prismaClient = prismaClient;
  }

  async find() {
    const user = await this.prismaClient.user.findMany({
      include: {
        courses: {
          orderBy: {
            order: "asc",
          }
        }
      }
    });
    return user;
  }

  async create() {
    const user = await this.prismaClient.user.create({
      data: {}
    });

    const payload = {
      sub: user.userId,
    };

    return { accessToken: jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION_TIME }), user };
  }

  async update(data) {
    const { userId, courses } = data;
    const user = await this.prismaClient.user.update({
      where: {
        userId,
      },
      data: {
        courses,
      }
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