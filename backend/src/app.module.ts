import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { AuthModule } from '@auth/auth.module';
import { UsersModule } from '@users/users.module';
import * as Joi from 'joi';
import { DatabaseModule } from './database/database.module';
import { SeriesController } from './series/series.controller';
import { SeriesModule } from './series/series.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    // AuthModule,
    // UsersModule,
    DatabaseModule,
    // SeriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
