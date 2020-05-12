import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav({
  flexGrow: 1,
  padding: '16px',
})

export const DrawerBody: FC = ({ children }) => (
  <Wrapper id="drawerBody">{children}</Wrapper>
)
