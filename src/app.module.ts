import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { __allModuleRegister } from './shared/register';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [...__allModuleRegister, PrismaModule, UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
