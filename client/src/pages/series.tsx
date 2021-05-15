import SeriesPage from 'src/components/pages/Series';
import SeriesRepositoryImpl from 'src/services/series_repository';
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
    seriesList: SeriesData[];
  }[];
}

export default function Home({ seriesList }: Props) {
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
