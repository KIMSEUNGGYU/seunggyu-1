import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Posts } from '@/entity/Posts';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>,
  ) {}

  async getPosts() {
    return this.postsRepository.find({ relations: ['tags'] });
  }
}
