import { prismaClient } from "../database/prisma.client.js";

export default class UserRepository {
  constructor() {
    this.prismaClient = prismaClient;
  }

  async find() {
    const user = await this.prismaClient.user.findMany();
    return { user };
  }

  async create() {
    const user = await this.prismaClient.user.create();
    return { user };
  }
}