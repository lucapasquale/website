import 'tailwindcss/tailwind.css'
import React, { FC } from 'react'
import { AppProps } from 'next/app'

import { DarkThemeContext } from '@helpers/theme/context'

const App: FC<AppProps> = ({ pageProps, Component }) => (
  <DarkThemeContext.Provider>
    <Component {...pageProps} />
  </DarkThemeContext.Provider>
)

export default App
