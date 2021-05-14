import { Controller, Get, Post, Request } from '@nestjs/common';

import { SeriesService } from '@series/series.service';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  async getSeries() {
    return this.seriesService.getSeries();
  }

  @Post()
  async creatSeries(@Request() req) {
    this.seriesService.createSeries(req.body);
  }
}
