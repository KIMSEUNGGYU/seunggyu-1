import { Tags } from '@entity/Tags';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Posts } from '@entity/Posts';
import { TagsModule } from '@/tags/tags.module';

@Module({
  imports: [TypeOrmModule.forFeature([Posts]), TagsModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
