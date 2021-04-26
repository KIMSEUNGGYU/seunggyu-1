import styled from '@emotion/styled';
import Head from 'next/head';

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

  return (
    <>
      <Head>
        <title>SERIES | SEUNGGYU</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="개발자 김승규의 시리즈 입니다. 튜토리얼 또는 순차적으로 개념을 익히세요"
        />
        <meta name="og:title" content="SEUNGGYU" />
        <meta
          name="og:image"
          content="https://res.cloudinary.com/du4w00gvm/image/upload/v1619410321/main_image.png"
        />
        <meta
          name="og:description"
          content="개발자 김승규의 시리즈 입니다. 튜토리얼 또는 순차적으로 개념을 익히세요"
        />
      </Head>
      <SeriesContainer>{seriesList}</SeriesContainer>
    </>
  );
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
