import SeriesRepositoryImpl from 'src/services/series_repository';
const seriesRepository = new SeriesRepositoryImpl();

export { default } from '@layout/Series';

export async function getStaticProps() {
  const seriesList = await seriesRepository.read();

  return {
    props: {
      seriesList,
    },
  };
}
