import axios from 'axios';

import { env } from '@constants/env';

interface SeriesRepository {
  read: () => void;
}

const BASE_URL = env.BASE_URL;

export default class SeriesRepositoryImpl implements SeriesRepository {
  // 조회
  async read() {
    const response = await axios.get(`${BASE_URL}/series/`);
    return response.data;
  }
}
