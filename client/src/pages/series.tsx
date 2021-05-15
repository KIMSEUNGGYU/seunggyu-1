import SeriesLayout from '@layout/Series';
import SeriesRepositoryImpl from 'src/services/series_repository';

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
  return <SeriesLayout seriesList={seriesList} />;
}

export async function getStaticProps() {
  const seriesList = await seriesRepository.read();

  return {
    props: {
      seriesList,
    },
  };
}
