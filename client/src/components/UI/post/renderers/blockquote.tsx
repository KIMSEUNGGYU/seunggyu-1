import React from 'react';
import styled from '@emotion/styled';

interface BlockQuoteProps {
  children: React.ReactChildren[];
}

const BlockQuote = styled.blockquote`
  border-left: 4px solid ${({ theme }) => theme.postTextColor};
  padding: 0 16px;
  margin: 0.5rem 0;

  & > p {
    font-size: 16px;
    margin: 0;
  }
`;

const blockquote = ({ children }: BlockQuoteProps) => {
  return <BlockQuote>{children}</BlockQuote>;
};

export default blockquote;
