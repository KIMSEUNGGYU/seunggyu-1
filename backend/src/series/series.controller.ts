import { SeriesService } from './series.service';
import { Controller, Get, Post, Request } from '@nestjs/common';
// import { Controller, Post, UseGuards, Request } from '@nestjs/common';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  async getSeries() {
    return this.seriesService.getSeries();
  }

  @Post()
  async createSeries(@Request() req) {
    return this.seriesService.createSeries(req.body);
  }
}
