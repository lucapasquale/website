import React, { FC } from 'react'

import { Layout } from '@common/components/Layout'
import { About } from '@modules/Home/About'

const Home: FC = () => (
  <Layout>
    <About />
  </Layout>
)

export default Home
