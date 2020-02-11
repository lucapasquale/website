import React, { FC } from 'react'
import styled from 'styled-components'

import { Drawer } from '../Drawer'
import { DrawerHeader } from '../Drawer/Header'
import { DrawerBody } from '../Drawer/Body'

const Link = styled.a({
  padding: '8px',
})

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const AppDrawer: FC<Props> = ({ isOpen, onClose }) => (
  <Drawer isOpen={isOpen} onClose={onClose}>
    <DrawerHeader onClose={onClose}>
      <h3>Luca Pasquale</h3>
    </DrawerHeader>

    <DrawerBody>
      <Link href="/projects">
        <h4>HOME</h4>
      </Link>

      <Link href="/projects">
        <h4>PROJECTS</h4>
      </Link>
    </DrawerBody>
  </Drawer>
)
