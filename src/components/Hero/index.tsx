import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { DarkThemeContext } from '../../helpers/contexts/dark-theme'

const Wrapper = styled.header<{ isDarkTheme: boolean }>(({ isDarkTheme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '32px',
  backgroundColor: 'var(--color-secondary-background)',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: isDarkTheme
    ? 'rgba(255, 255, 255, 0.125)'
    : 'rgba(0, 0, 0, 0.125)',
}))

const SubTitle = styled.h2({
  color: 'var(--color-secondary)',
  textAlign: 'center',
})

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
  const { theme } = DarkThemeContext.useContainer()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} - ${subTitle}`} />
      </Head>

      <Wrapper isDarkTheme={theme === 'dark'}>
        {topContent}

        <h1>{title}</h1>
        <SubTitle>{subTitle}</SubTitle>

        {bottomContent}
      </Wrapper>
    </>
  )
}
