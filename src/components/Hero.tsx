import React, { FC, ReactNode } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Wrapper = styled.header(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '32px',
  backgroundColor: theme.colors.secondaryBackground,
  borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
}))

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
}) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={`${title} - ${subTitle}`} />
    </Helmet>

    <Wrapper>
      {topContent}

      <h1>{title}</h1>
      <SubTitle>{subTitle}</SubTitle>

      {bottomContent}
    </Wrapper>
  </>
)
