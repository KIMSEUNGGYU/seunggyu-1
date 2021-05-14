import { ConnectionOptions } from 'typeorm';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'dev_password',
  database: 'database_development',
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/seeds/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'src/seeds',
  },
} as ConnectionOptions;
