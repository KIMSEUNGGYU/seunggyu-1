import { useState } from 'react';
import styled from '@emotion/styled';

import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { theme } from '@theme/index';
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
        {toggle ? (
          <SeriesLists visible={toggle}>
            {SeriesListContainer}
            {ToggleCloseComponent}
          </SeriesLists>
        ) : (
          ToggleOpenComponent
        )}
      </SeriesWrapper>

      <DevelopingDialog visible={bDevelopDialog} closeDialog={closeDialog} />
    </>
  );
}

const SeriesWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${theme.MAIN_COLOR};
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  line-height: 300px;
`;

const ToggleBlock = styled.div`
  margin-top: 3rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 28px;
  color: ${theme.MAIN_COLOR};
`;

const SeriesLists = styled.ol<any>`
  display: none;

  ${(visible) =>
    visible &&
    css`
      display: block;
      width: 100%;
      padding: 30px 25px;
      background-color: white;
      font-size: 20px;
      position: relative;
    `}
`;

const SeriesList = styled.li`
  cursor: pointer;

  &:hover {
    color: ${theme.MAIN_COLOR};
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
