import React, { FC, useMemo } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'

import { DarkThemeContext } from '@helpers/theme/context'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)

type Props = {
  value: any
  language?: string
}

export const Code: FC<Props> = ({ language, value }) => {
  const { isDarkTheme } = DarkThemeContext.useContainer()

  const style = useMemo(() => {
    return isDarkTheme ? darcula : prism
  }, [isDarkTheme])

  return (
    <SyntaxHighlighter style={style} language={language}>
      {value}
    </SyntaxHighlighter>
  )
}
