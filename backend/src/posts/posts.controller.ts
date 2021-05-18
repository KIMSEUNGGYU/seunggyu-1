import { PostsService } from './posts.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getPosts() {
    return await this.postsService.getPosts();
  }

  @Get(':id')
  async getPost(@Param('id') postId: string) {
    return await this.postsService.getPost(postId);
  }

  @Post()
  async createPost(@Body() postData) {
    return await this.postsService.createPost(postData);
  }

  @Put(':id')
  async updatePost(@Param('id') postId: string, @Body() postData) {
    return await this.postsService.updatePost(postId, postData);
  }
}
