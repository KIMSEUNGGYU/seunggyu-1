import Series from 'src/components/pages/Series';
import SeriesRepositoryImpl from 'src/services/series_repository';
import { SeriesData } from '@common/types';
const seriesRepository = new SeriesRepositoryImpl();

interface Props {
  series: SeriesData[];
}

export default function Home({ series }: Props) {
  return <Series series={series} />;
}

export async function getStaticProps() {
  const series = await seriesRepository.read();

  return {
    props: {
      series,
    },
  };
}
