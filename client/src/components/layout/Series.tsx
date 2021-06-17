import styled from '@emotion/styled';

import Series from '@series/Series';
import HeadWrapper from '@components/Head';
import { BP, theme } from '@theme/index';

type SeriesData = {
  id: number;
  title: string;
  postId: string;
  postTitle: string;
};

type SeriesListData = {
  title: string;
  seriesList: SeriesData[];
};

interface Props {
  seriesList: SeriesListData[];
}

function SeriesLayout({ seriesList }: Props) {
  const SeriesList = seriesList.map((series, idx) => {
    return (
      <SeriesBlock key={idx}>
        <Series title={series.title} seriesList={series.seriesList} />
      </SeriesBlock>
    );
  });

  return (
    <>
      <HeadWrapper
        title="SERIES"
        description="개발자 김승규의 시리즈 입니다. 튜토리얼 또는 순차적으로 개념을 익히세요"
      />
      <SeriesContainer>{SeriesList}</SeriesContainer>
    </>
  );
}

const SeriesContainer = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SeriesBlock = styled.div`
  width: 48%;
  height: 330px;
  background-color: ${theme.SERIES_BOX_COLOR};
  margin-top: 2rem;

  @media (max-width: ${BP.TABLET}) {
    width: 100%;
    height: auto;
  }
`;

export default SeriesLayout;
