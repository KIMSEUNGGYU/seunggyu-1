import { useRecoilState, useRecoilValue } from 'recoil';

import SeriesPage from '@components/layout/Series';
import SeriesRepositoryImpl from 'src/services/series_repository';
import { isLoginState, seriesState } from '@state/index';
import { useEffect } from 'react';
// import { SeriesData } from '@common/types';

const seriesRepository = new SeriesRepositoryImpl();

type SeriesData = {
  id: number;
  title: string;
  postId: string;
  postTitle: string;
};

interface Props {
  seriesList: {
    title: string;
    seriesList: SeriesData[] | [];
  }[];
}

export default function Series({ seriesList }: Props) {
  const [value, setValue] = useRecoilState<any>(seriesState);
  useEffect(() => {
    setValue(seriesList);
    console.log(value);
  }, []);

  return <SeriesPage seriesList={seriesList} />;
}

export async function getStaticProps() {
  const seriesList = await seriesRepository.read();

  return {
    props: {
      seriesList,
    },
  };
}
