import styled from '@emotion/styled';

import Series from 'src/components/UI/series/Series';
import { theme } from '@theme/index';
import { SeriesData } from '@common/types';

interface Props {
  series: SeriesData[];
}

function SeriesPage({ series }: Props) {
  const seriesList = series.map((contents, idx) => (
    <SeriesBlock key={idx}>
      <Series series={contents} />
    </SeriesBlock>
  ));

  return <SeriesContainer>{seriesList}</SeriesContainer>;
}

const SeriesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;
`;

const SeriesBlock = styled.div`
  max-width: 48%;
  width: 48%;
  height: 330px;
  background-color: ${theme.SERIES_BOX_COLOR};
  margin-top: 49px;
  position: relative;
`;

export default SeriesPage;
