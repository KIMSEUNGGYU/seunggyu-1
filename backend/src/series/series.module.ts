import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeriesController } from '@series/series.controller';
import { SeriesService } from '@series/series.service';
import { Series } from '@entity/Series';

@Module({
  imports: [TypeOrmModule.forFeature([Series])],
  providers: [SeriesService],
  controllers: [SeriesController],
})
export class SeriesModule {}
