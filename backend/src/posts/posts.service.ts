import { TagsService } from '@/tags/tags.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Posts } from '@entity/Posts';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>,
    private readonly tagsService: TagsService,
  ) {}

  async getPosts() {
    return this.postsRepository.find();
  }

  async getPost(postId) {
    return this.postsRepository.findOne({ where: { id: postId } });
  }

  async createPost(postData) {
    const { tags, ...post } = postData;

    try {
      const newTags = await this.tagsService.findNewTag(tags);

      // create tag
      newTags.length && (await this.tagsService.createTag(newTags));

      // create post
      const postEntity = this.getPostEntity(post, tags);
      await this.postsRepository.save(postEntity);
    } catch (error) {
      console.error(`Create Post Error: ${error}`);
    }
  }

  private getPostEntity(post, tags) {
    const postEntity = this.postsRepository.create();
    postEntity.title = post.title;
    postEntity.date = post.date;
    postEntity.description = post.description;
    postEntity.contents = post.contents;
    postEntity.tags = tags.toString();
    return postEntity;
  }
}
