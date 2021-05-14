import { Series } from './series.entity_';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private SeriesRepository: Repository<Series>,
  ) {}

  getSeries() {
    return this.SeriesRepository.find();
  }

  createSeries(series) {
    return this.SeriesRepository.save(series);
  }
}
