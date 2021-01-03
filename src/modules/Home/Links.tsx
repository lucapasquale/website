import React, { FC } from 'react'
import styled from 'styled-components'

import config from '@src/config'
import { Icon } from '@components/Icon'
import { colors } from '@helpers/theme/colors'

const Section = styled.section({
  maxWidth: '450px',
  marginLeft: '64px',

  '@media (max-width: 700px)': {
    width: '100%',
    marginLeft: '0px',
  },
})

const LinksWrapper = styled.nav({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: '16px',

  '@media (max-width: 700px)': {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
  },
})

const IconWrapper = styled.a({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  margin: '8px',
  marginBottom: '16px',
  color: `var(${colors.primary.cssVariable})`,

  ':hover': {
    color: `var(${colors.link.cssVariable})`,
  },
})

const LinkLabel = styled.div({
  margin: 0,
  marginLeft: '8px',
  fontSize: '18px',
  fontWeight: 700,
})

export const Links: FC = () => (
  <Section>
    <h3>Contact</h3>

    <LinksWrapper>
      <IconWrapper target="_blank" rel="noopener noreferrer" href={config.LINKS.GITHUB}>
        <Icon name="Github" size="2rem" />

        <LinkLabel>GITHUB</LinkLabel>
      </IconWrapper>

      <IconWrapper target="_blank" href={`mailto:${config.CONTACT.EMAIL}`}>
        <Icon name="Email" size="2rem" />

        <LinkLabel>EMAIL</LinkLabel>
      </IconWrapper>

      <IconWrapper target="_blank" rel="noopener noreferrer" href={config.LINKS.LINKEDIN}>
        <Icon name="Linkedin" size="2rem" />

        <LinkLabel>LINKEDIN</LinkLabel>
      </IconWrapper>

      <IconWrapper target="_blank" rel="noopener noreferrer" href={config.LINKS.INSTAGRAM}>
        <Icon name="Instagram" size="2rem" />

        <LinkLabel>INSTAGRAM</LinkLabel>
      </IconWrapper>
    </LinksWrapper>
  </Section>
)
