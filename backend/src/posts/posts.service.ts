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
    return this.postsRepository.find({ relations: ['tags'] });
  }

  async getPost(postId) {
    return this.postsRepository.findOne({ relations: ['tags'], where: { id: postId } });
  }

  async updatePost(postId, postData) {
    const { tags, ...post } = postData;

    const newTags = await this.tagsService.findNewTag(tags);
    newTags.length && (await this.tagsService.createTag(newTags));

    const postToUpdate = await this.postsRepository.findOne(postId);
    postToUpdate.title = post.title;
    postToUpdate.date = post.date;
    postToUpdate.description = post.description;
    postToUpdate.contents = post.contents;
    postToUpdate.tags = tags.toString();

    await this.postsRepository.save(postToUpdate);
  }

  async deletePost(postId) {
    const postToRemove = await this.postsRepository.findOne(postId);
    await this.postsRepository.remove(postToRemove);
  }

  async createPost(postData) {
    const { tags, ...post } = postData;

    try {
      // create tag
      const newTags = await this.tagsService.findNewTag(tags);
      newTags.length && (await this.tagsService.createTag(newTags));

      // create post
      const postEntity = await this.getPostEntity(post, tags);
      await this.postsRepository.save(postEntity);
    } catch (error) {
      console.error(`Create Post Error: ${error}`);
    }
  }

  private async getPostEntity(post, tags) {
    const tagsId = await this.tagsService.getTagByName(tags);
    const postEntity = this.postsRepository.create();
    postEntity.title = post.title;
    postEntity.date = post.date;
    postEntity.description = post.description;
    postEntity.contents = post.contents;
    postEntity.tags = tagsId;
    return postEntity;
  }
}
