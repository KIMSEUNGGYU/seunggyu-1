import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { AuthModule } from '@auth/auth.module';
import { UsersModule } from '@users/users.module';
import { DatabaseModule } from '@database/database.module';
import { SeriesModule } from '@series/series.module';
import { PostsModule } from './posts/posts.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    AuthModule,
    UsersModule,
    DatabaseModule,
    SeriesModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
