import React, { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type Props = {
  value: any
  language?: string
}

export const Code: FC<Props> = ({ language, value }) => (
  <SyntaxHighlighter style={dracula} language={language}>
    {value}
  </SyntaxHighlighter>
)
