import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}