import React, { FC } from 'react'
import styled from 'styled-components'

import { Drawer } from '../Drawer'
import { DrawerHeader } from '../Drawer/Header'
import { DrawerBody } from '../Drawer/Body'

const HeaderTitle = styled.h3({
  padding: '8px',
})

const MenuItems = styled.h4({
  padding: '8px',
})

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const AppDrawer: FC<Props> = ({ isOpen, onClose }) => (
  <Drawer isOpen={isOpen} onClose={onClose}>
    <DrawerHeader onClose={onClose}>
      <a href="/">
        <HeaderTitle>Luca Pasquale</HeaderTitle>
      </a>
    </DrawerHeader>

    <DrawerBody>
      <a href="/projects">
        <MenuItems>HOME</MenuItems>
      </a>

      <a href="/projects">
        <MenuItems>PROJECTS</MenuItems>
      </a>
    </DrawerBody>
  </Drawer>
)
