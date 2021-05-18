import { Controller, Delete, Get, Param } from '@nestjs/common';

import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async getTags() {
    return this.tagsService.getTags();
  }

  @Delete(':tagName')
  async deleteTag(@Param('tagName') tagName: string) {
    return this.tagsService.deleteTag(tagName);
    // console.log('delete tag', tagName);
  }
}
