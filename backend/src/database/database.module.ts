import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Users } from '@entity/Users';
import { Series } from '@entity/Series';
import { Tags } from '@entity/Tags';
import { Posts } from '@/entity/Posts';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        logging: false,
        entities: [Users, Series, Posts, Tags],
        // synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
