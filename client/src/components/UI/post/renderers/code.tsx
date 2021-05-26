import styled from '@emotion/styled';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cb from 'react-syntax-highlighter/dist/cjs/styles/prism/cb';

import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import html from 'react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('tsx', typescript);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('json', json);

interface CodeProps {
  language: string;
  value: string;
}

const SyntaxWrapper = styled(SyntaxHighlighter)`
  background-color: ${({ theme }) => theme.CODE_BACKGROUND} !important;
  font-size: 0.9em;

  & code {
    color: ${({ theme }) => theme.primaryColor} !important;
    text-shadow: none !important;
  }

  & .hljs-keyword {
    color: ${({ theme }) => theme.CODE_KEWORD};
  }
  & .hljs-string {
    color: ${({ theme }) => theme.CODE_STRING};
  }
  & .hljs-number {
    color: ${({ theme }) => theme.CODE_NUMBER};
  }
  & .hljs-variable {
    color: ${({ theme }) => theme.CODE_VAR};
  }
  & .hljs-selector-tag {
    color: ${({ theme }) => theme.CODE_TAG};
  }
  & .hljs-selector-id {
    color: ${({ theme }) => theme.CODE_ID};
  }
  & .hljs-attribute {
    color: ${({ theme }) => theme.CODE_ATTRIBUTE};
  }
  & .hljs-tag {
    color: ${({ theme }) => theme.CODE_HTML};
  }
`;

const code = ({ language, value }: CodeProps) => (
  <SyntaxWrapper style={cb} language={language}>
    {value}
  </SyntaxWrapper>
);

export default code;
