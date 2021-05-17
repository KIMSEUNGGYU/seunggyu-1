import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Tags } from '@entity/Tags';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tags)
    private readonly tagRepository: Repository<Tags>,
  ) {}

  async getTags() {
    return this.tagRepository.find();
  }
}
