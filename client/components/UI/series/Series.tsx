import { FC, useState } from "react";
import styled from "@emotion/styled";

import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { theme } from "@theme/index";
import { SeriesData } from "@common/types";

type Props = {
  series: SeriesData;
};

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
  bottom: 30px;
  right: 25px;
  cursor: pointer;
  font-size: 28px;
  color: ${theme.MAIN_COLOR};
`;

const SeriesLists = styled.ol`
  padding: 30px 25px;
  padding-bottom: 90px;
  background-color: white;
  font-size: 20px;
  position: relative;
`;

const SeriesList = styled.li`
  cursor: pointer;

  &:hover {
    color: ${theme.MAIN_COLOR};
    font-weight: bold;
  }
  &::before {
    content: "- ";
    counter-increment: item;
    color: rgb(128, 133, 138);
    font-style: italic;
    margin-right: 0.25rem;
  }
`;

const Series: FC<Props> = ({ series }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Title>{series.title}</Title>

      {toggle ? (
        <>
          <SeriesLists>
            {series.lists.map((list) => (
              <SeriesList key={list.id}>{list.title}</SeriesList>
            ))}

            <ToggleBlock onClick={() => setToggle(!toggle)}>
              <CaretUpOutlined />
            </ToggleBlock>
          </SeriesLists>
        </>
      ) : (
        <ToggleBlock onClick={() => setToggle(!toggle)}>
          <CaretDownOutlined />
        </ToggleBlock>
      )}
    </>
  );
};

export default Series;
