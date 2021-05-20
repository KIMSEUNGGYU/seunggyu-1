import axios from 'axios';

import { env } from 'src/constants/env';

interface SeriesRepository {
  read: () => void;
}

const BASE_URL = env.BASE_URL;

type Series = {
  id: number;
  title: string;
  postId: string;
  postTitle: string;
};

export default class SeriesRepositoryImpl implements SeriesRepository {
  // 조회
  async read() {
    try {
      const response = await axios.get(`${BASE_URL}/series`);

      const data = response.data.reduce((acc: any, curr: Series) => {
        if (!acc[curr.title]) acc[curr.title] = [];
        acc[curr.title].push(curr);
        return acc;
      }, {});

      const newData = Object.entries(data).map(([key, values]) => ({
        title: key,
        seriesList: values,
      }));

      return newData;
    } catch (error) {
      console.error(`SERIES GET ERROR: ${error}`);
    }
  }
}
