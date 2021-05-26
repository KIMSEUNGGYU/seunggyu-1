import styled from '@emotion/styled';

interface InlineCodeProps {
  value: string;
}

const InlineCode = styled.code`
  background-color: ${({ theme }) => theme.CODE_BACKGROUND};
  color: ${({ theme }) => theme.CODE_INLINE};
  padding: 3px 4px;
  border-radius: 4px;
  font-size: 0.85rem;
`;

const inlineCode = ({ value }: InlineCodeProps) => <InlineCode>{value}</InlineCode>;

export default inlineCode;
