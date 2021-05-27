import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as entities from 'entities';



dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'production' ? '.env' : '.dev.env'),
});

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOSTNAME,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: Object.values(entities),
      synchronize: process.env.NODE_ENV !== 'production', // false on production
      retryAttempts: 2,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
