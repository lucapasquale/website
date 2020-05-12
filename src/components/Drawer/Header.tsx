import React, { FC } from 'react'
import styled from 'styled-components'

import { Icon } from '../Icon'
import { DarkThemeContext } from '../../helpers/contexts/dark-theme'

export const Wrapper = styled.header<{ isDarkTheme: boolean }>(
  ({ isDarkTheme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: '48px',
    boxSizing: 'border-box',
    padding: `8px 16px`,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: isDarkTheme
      ? 'rgba(255, 255, 255, 0.125)'
      : 'rgba(0, 0, 0, 0.125)',
  }),
)

export const ButtonClose = styled.div({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
})

type Props = {
  onClose?: () => void
}

export const DrawerHeader: FC<Props> = ({ children, onClose }) => {
  const { theme } = DarkThemeContext.useContainer()

  return (
    <Wrapper isDarkTheme={theme === 'dark'}>
      {children}

      <ButtonClose onClick={onClose}>
        <Icon name="Close" size={24} />
      </ButtonClose>
    </Wrapper>
  )
}
