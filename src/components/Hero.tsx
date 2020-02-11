import React, { FC, ReactNode } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { DarkThemeContext } from '../helpers/contexts/dark-theme'

const Wrapper = styled.header<{ isDarkTheme: boolean }>(
  ({ theme, isDarkTheme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: '32px',
    backgroundColor: theme.colors.secondaryBackground,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: isDarkTheme
      ? 'rgba(255, 255, 255, 0.125)'
      : 'rgba(0, 0, 0, 0.125)',
  }),
)

const SubTitle = styled.h2(({ theme }) => ({
  color: theme.colors.secondary,
  textAlign: 'center',
}))

type Props = {
  title: string
  subTitle: string
  topContent?: ReactNode
  bottomContent?: ReactNode
}

export const Hero: FC<Props> = ({
  title,
  subTitle,
  topContent,
  bottomContent,
}) => {
  const { isDarkTheme } = DarkThemeContext.useContainer()

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${title} - ${subTitle}`} />
      </Helmet>

      <Wrapper isDarkTheme={isDarkTheme}>
        {topContent}

        <h1>{title}</h1>
        <SubTitle>{subTitle}</SubTitle>

        {bottomContent}
      </Wrapper>
    </>
  )
}
