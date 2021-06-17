import styled from '@emotion/styled';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';
import atomOneLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light';
import { useRecoilValue } from 'recoil';

import { themeModeState } from '@state/index';

import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import html from 'react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import python from 'react-syntax-highlighter/dist/cjs/languages/hljs/python';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('tsx', typescript);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('python', python);

interface CodeProps {
  language: string;
  value: string;
}

const SyntaxWrapper = styled(SyntaxHighlighter)`
  & code {
    color: ${({ theme }) => theme.primaryColor} !important;
    font-size: 1rem;
  }
  background-color: ${({ theme }) => theme.CODE_BACKGROUND} !important;
`;

const code = ({ language, value }: CodeProps) => {
  const mode = useRecoilValue(themeModeState);

  return (
    <SyntaxWrapper style={mode === 'dark' ? atomOneDark : atomOneLight} language={language}>
      {value}
    </SyntaxWrapper>
  );
};

export default code;
