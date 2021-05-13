import { SeriesService } from './series.service';
import { Controller, Get } from '@nestjs/common';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  async getSeries() {
    return this.seriesService.getSeries();
  }
}
