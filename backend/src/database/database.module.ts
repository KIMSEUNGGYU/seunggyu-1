import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'mysql',
    //     host: configService.get('DATABASE_HOST'),
    //     port: configService.get('DATABASE_PORT'),
    //     username: configService.get('DATABASE_USER'),
    //     password: configService.get('DATABASE_PASSWORD'),
    //     database: configService.get('DATABASE_NAME'),
    //     // entities: [join(__dirname, '/../**/*.entity.js')],
    //     // entities: [join(__dirname, '/../**/*/entity/*.ts')],
    //     // synchronize: true,
    //     logging: false,
    //     entities: ['src/entity/*.ts', './build/src/entity/*.js'], // <- Here!
    //     // entities: ['src/entities/*.ts'],
    //     migrations: ['src/migration/**/*.ts'],
    //     subscribers: ['src/subscriber/**/*.ts'],
    //     cli: {
    //       entitiesDir: 'src/entity',
    //       migrationsDir: 'src/migration',
    //       subscribersDir: 'src/subscriber',
    //     },
    //   }),
    // }),
  ],
})

// "type": "mysql",
//   "host": "localhost",
//   "port": 3306,
//   "username": "root",
//   "password": "dev_password",
//   "database": "database_development",
//   "synchronize": true,
//   "logging": false,
//   "entities": ["entities/*.js"],
//   "migrations": ["src/migration/**/*.ts"],
//   "subscribers": ["src/subscriber/**/*.ts"],
//   "cli": {
//     "entitiesDir": "src/entity",
//     "migrationsDir": "src/migration",
//     "subscribersDir": "src/subscriber"
//   }
export class DatabaseModule {}
