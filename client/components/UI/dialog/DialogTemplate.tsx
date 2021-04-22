import React from 'react';
import styled from '@emotion/styled';

const DialogTemplate = ({ children }: any) => {
  return <DarkBackground>{children}</DarkBackground>;
};

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background: rgba(0, 0, 0, 0.2);
`;

export default DialogTemplate;
