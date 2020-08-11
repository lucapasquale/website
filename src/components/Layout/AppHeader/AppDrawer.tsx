import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { Drawer } from '@components/Drawer'
import { DrawerHeader } from '@components/Drawer/Header'
import { DrawerBody } from '@components/Drawer/Body'

const HeaderTitle = styled.h3({
  padding: '8px',
})

const MenuItems = styled.h4({
  padding: '16px 8px',
})

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const AppDrawer: FC<Props> = ({ isOpen, onClose }) => (
  <Drawer isOpen={isOpen} onClose={onClose}>
    <DrawerHeader onClose={onClose}>
      <Link href="/">
        <a>
          <HeaderTitle>Luca Pasquale</HeaderTitle>
        </a>
      </Link>
    </DrawerHeader>

    <DrawerBody>
      <Link href="/">
        <a>
          <MenuItems>HOME</MenuItems>
        </a>
      </Link>

      <Link href="/blog">
        <a>
          <MenuItems>BLOG</MenuItems>
        </a>
      </Link>

      <Link href="/projects">
        <a>
          <MenuItems>PROJECTS</MenuItems>
        </a>
      </Link>
    </DrawerBody>
  </Drawer>
)
