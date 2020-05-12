import React, { FC, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { DarkThemeContext } from '../../helpers/contexts/dark-theme'

const Overlay = styled.div<{ isOpen: boolean; backgroundColor: string }>(
  ({ isOpen, backgroundColor }) => ({
    left: 0,
    top: 0,
    zIndex: 100,
    position: 'fixed',
    overflow: 'hidden',

    height: '100%',
    width: '100%',

    transition: 'background-color .25s ease',
    transform: `translate3d(${isOpen ? 0 : '-100%'}, 0, 0)`,
    backgroundColor: isOpen ? backgroundColor : 'transparent',
  }),
)

const Wrapper = styled.aside<{ isOpen: boolean }>(({ isOpen }) => ({
  height: '100%',
  width: '66%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'var(--color-background)',

  transition: 'all .15s ease',
  transform: `translate3d(${isOpen ? 0 : '-100%'}, 0, 0)`,
}))

type DrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export const Drawer: FC<DrawerProps> = ({ children, isOpen, onClose }) => {
  const { theme } = DarkThemeContext.useContainer()

  const [portalContainer, setPortalContainer] = useState<HTMLDivElement>()

  useEffect(() => {
    const div = document.createElement('div')
    setPortalContainer(div)
    document.body.appendChild(div)

    return () => {
      const el = document.getElementById('drawerBody')
      el && enableBodyScroll(el)
      div && document.body.removeChild(div)
    }
  }, [])

  useEffect(() => {
    const el = document.getElementById('drawerBody')
    if (el) {
      if (isOpen) {
        disableBodyScroll(el)
        return
      }

      enableBodyScroll(el)
    }
  }, [isOpen])

  if (!portalContainer) {
    return null
  }

  const backgroundColor =
    theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'

  return createPortal(
    <Overlay
      isOpen={isOpen}
      backgroundColor={backgroundColor}
      onClick={onClose}
    >
      <Wrapper isOpen={isOpen} onClick={e => e.stopPropagation()}>
        {children}
      </Wrapper>
    </Overlay>,
    portalContainer,
  )
}
