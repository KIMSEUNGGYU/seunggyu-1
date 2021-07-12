import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';

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
  }

  @Put(':id')
  async updateTag(@Param('id') tagId: string, @Body() tagData) {
    const tagName = tagData['name'];
    return this.tagsService.updateTag(tagId, tagName);
  }
}
