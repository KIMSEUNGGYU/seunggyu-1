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

    // 새로운 태그라면 새로운 태그 추가
    const newTags = await this.tagsService.findNewTag(tags);
    newTags.length && (await this.tagsService.createTag(newTags));

    // 업데이트를 위한 tagsEntity 생성 (요청된 태그 내용 기반)
    const postToUpdate = await this.postsRepository.findOne({
      relations: ['tags'],
      where: { id: postId },
    });
    if (!postToUpdate) return;

    // 업데이트 적용
    // UpdatePostEntity 정의
    // tags.toString() 이 되는 이유는 새로운 tag가 req 되면 생성하고, 이미 존재하면 해당 tag를 가져옴
    const prevTag = postToUpdate.tags; // 이전 태그는 삭제 검사를 위함
    const tagsEntity = await this.tagsService.getTagByName(tags.toString()); // 업데이트를 하기 위한 Entity 생성
    postToUpdate.title = post.title;
    postToUpdate.date = post.date;
    postToUpdate.description = post.description;
    postToUpdate.contents = post.contents;
    postToUpdate.tags = tagsEntity;

    // 업데이트 적용
    try {
      await this.postsRepository.save(postToUpdate);
    } catch (error) {
      console.error(`Update Post Error: ${error}`);
    }

    // 태그 삭제 조건 검사 후 조건에 따른 실행
    const postList = await this.postsRepository.find({
      relations: ['tags'],
      where: { tags: prevTag.id },
    });
    try {
      postList.length < 1 && (await this.tagsService.deleteTag(prevTag.name));
    } catch (error) {
      console.error(`DELETE TAG ERROR: ${error}`);
    }
  }

  async deletePost(postId) {
    try {
      const postToRemove = await this.postsRepository.findOne({
        relations: ['tags'],
        where: { id: postId },
      });

      // 삭제되는 post의 동일한 tag가 하나 이하인 경우 해당 태그도 삭제
      // 관련 태그 삭제
      const postList = await this.getPostListByTag(postToRemove);
      postToRemove &&
        postList.length <= 1 &&
        (await this.tagsService.deleteTag(postToRemove.tags.name));

      // 관련 post 삭제
      postToRemove && (await this.postsRepository.remove(postToRemove));
    } catch (error) {
      console.error(`Delete Post Error:${error}`);
    }
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

  private async getPostListByTag(postEntity) {
    const postListByTag =
      postEntity &&
      (await this.postsRepository.find({
        relations: ['tags'],
        where: { tags: postEntity.tags.id },
      }));

    return postListByTag;
  }
}
