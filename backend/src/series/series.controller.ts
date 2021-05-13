import { Controller, Get } from '@nestjs/common';

@Controller('series')
export class SeriesController {
  @Get()
  getSeries() {
    return 'get series';
  }
}
