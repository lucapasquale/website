import React, { FC } from 'react'
import styled from 'styled-components'

import config from '../../../config'
import { Icon } from '../../../components/Icon'
import { DarkThemeContext } from '../../../helpers/contexts/dark-theme'

const Section = styled.section({
  maxWidth: '450px',
  marginLeft: '64px',

  '@media (max-width: 700px)': {
    width: '100%',
    marginLeft: '0px',
  }
})

const LinksWrapper = styled.nav({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: '16px',

  '@media (max-width: 700px)': {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
  }
})

const IconWrapper = styled.a({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  margin: '8px',
  marginBottom: '16px',
})

const LinkLabel = styled.h3({
  margin: 0,
  marginLeft: '8px',
})

export const Links: FC = () => {
  const { colors } = DarkThemeContext.useContainer()

  return (
    <Section>
      <h3>Contact</h3>

      <LinksWrapper>
        <IconWrapper target="_blank" rel="noopener" href={config.LINKS.GITHUB}>
          <Icon name="Github" size="2rem" fill={colors.primary} />

          <LinkLabel>GITHUB</LinkLabel>
        </IconWrapper>

        <IconWrapper target="_blank" href={`mailto:${config.CONTACT.EMAIL}`}>
          <Icon name="Email" size="2rem" fill={colors.primary} />

          <LinkLabel>EMAIL</LinkLabel>
        </IconWrapper>

        <IconWrapper target="_blank" rel="noopener" href={config.LINKS.INSTAGRAM}>
          <Icon name="Instagram" size="2rem" fill={colors.primary} />

          <LinkLabel>INSTAGRAM</LinkLabel>
        </IconWrapper>

        <IconWrapper target="_blank" rel="noopener" href={config.LINKS.LINKEDIN}>
          <Icon name="Linkedin" size="2rem" fill={colors.primary} />

          <LinkLabel>LINKEDIN</LinkLabel>
        </IconWrapper>
      </LinksWrapper>

    </Section>
  )
}
