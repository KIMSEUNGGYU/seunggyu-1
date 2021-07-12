import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Tags } from '@entity/Tags';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tags)
    private readonly tagsRepository: Repository<Tags>,
  ) {}

  async getTags() {
    return this.tagsRepository.find();
  }

  async getTagByName(name: string) {
    return this.tagsRepository.findOne({ where: { name } });
  }

  async findNewTag(tags) {
    const newTag = [];
    for (const tag of tags) {
      const getTag = await this.tagsRepository.find({ where: { name: tag } });
      getTag.length < 1 && newTag.push(tag);
    }

    return newTag;
  }

  async createTag(newTags) {
    for (const tag of newTags) {
      const tagsEntity = this.tagsRepository.create();
      tagsEntity.name = tag;
      await this.tagsRepository.save(tagsEntity);
    }
  }

  async deleteTag(tagName) {
    const tagToRemove = await this.tagsRepository.findOne({ where: { name: tagName } });
    tagToRemove && (await this.tagsRepository.remove(tagToRemove));
  }

  async updateTag(tagId: string, tagName: string) {
    const tagToUpdate = await this.tagsRepository.findOne({ where: { id: tagId } });

    if (!tagToUpdate) return;

    tagToUpdate.name = tagName;
    // 업데이트 적용
    try {
      await this.tagsRepository.save(tagToUpdate);
    } catch (error) {
      console.error(`Update Tag Error: ${error}`);
    }
  }
}
