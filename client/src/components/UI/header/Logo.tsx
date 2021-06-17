import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

interface Props {
  mode: any;
  goLink(target: any): void;
}

function Logo({ mode, goLink }: Props) {
  return (
    <LogoWrapper>
      <Image
        data-name="logo"
        src={`/logo-${mode}.svg`}
        alt="Picture of the author"
        width={180}
        height={41}
        onClick={goLink}
      />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  margin: 27px;
  margin-left: 27px;
  cursor: pointer;
`;

export default React.memo(Logo);
