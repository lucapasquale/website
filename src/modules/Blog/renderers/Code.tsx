import React, { FC } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)

type Props = {
  value: any
  language?: string
}

export const Code: FC<Props> = ({ language, value }) => (
  <SyntaxHighlighter style={darcula} language={language}>
    {value}
  </SyntaxHighlighter>
)
