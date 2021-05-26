import { useState } from 'react';
import styled from '@emotion/styled';

import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { BP, theme } from '@theme/index';
import DevelopingDialog from 'src/components/UI/dialog/DevelopingDialog';
import { css } from '@emotion/react';

type SeriesData = {
  id: number;
  title: string;
  postId: string;
  postTitle: string;
};

interface Props {
  title: string;
  seriesList: SeriesData[];
}

function Series({ title, seriesList }: Props) {
  const [toggle, setToggle] = useState(false);
  const [bDevelopDialog, setbDevelopDialog] = useState(false);

  const closeDialog = () => setbDevelopDialog(false);
  const openDialog = () => setbDevelopDialog(true);
  const closeSeriesList = () => setToggle(false);
  const openSeriesList = () => setToggle(true);

  const ToggleOpenComponent = (
    <ToggleBlock onClick={openSeriesList}>
      <CaretDownOutlined />
    </ToggleBlock>
  );

  const ToggleCloseComponent = (
    <ToggleBlock onClick={closeSeriesList}>
      <CaretUpOutlined />
    </ToggleBlock>
  );

  const SeriesListContainer = seriesList.map((item) => (
    <SeriesList key={item.id} onClick={openDialog}>
      {item.postTitle}
    </SeriesList>
  ));

  return (
    <>
      <SeriesWrapper>
        <Title>{title}</Title>
        {!toggle && ToggleOpenComponent}
      </SeriesWrapper>
      {toggle && (
        <SeriesLists visible={toggle}>
          {SeriesListContainer}
          {ToggleCloseComponent}
        </SeriesLists>
      )}

      <DevelopingDialog visible={bDevelopDialog} closeDialog={closeDialog} />
    </>
  );
}

const SeriesWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.seriesTitleBoxColor};

  @media (max-width: ${BP.TABLET}) {
    height: 200px;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.mainColor};
  font-size: 2rem;
  font-weight: bold;
`;

const ToggleBlock = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 28px;
  color: ${({ theme }) => theme.mainColor};
`;

const SeriesLists = styled.ol<any>`
  display: none;

  margin: 0;
  width: 100%;
  padding: 30px 25px;
  background: ${({ theme }) => theme.seriesListBoxColor};
  font-size: 20px;
  position: relative;

  ${(visible) =>
    visible &&
    css`
      display: block;
    `}
`;

const SeriesList = styled.li`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
    font-weight: bold;
  }
  &::before {
    content: '- ';
    counter-increment: item;
    color: rgb(128, 133, 138);
    font-style: italic;
    margin-right: 0.25rem;
  }
`;

export default Series;
