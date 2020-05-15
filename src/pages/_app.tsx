import '../styles.css'
import React from 'react'
import { AppProps } from 'next/app'

import { DarkThemeContext } from '@helpers/theme/context'

const App = ({ pageProps, Component }: AppProps) => (
  <DarkThemeContext.Provider>
    <Component {...pageProps} />
  </DarkThemeContext.Provider>
)

export default App
