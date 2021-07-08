import '../styles.css'
import React, { FC } from 'react'
import { AppProps } from 'next/app'

const App: FC<AppProps> = ({ pageProps, Component }) => <Component {...pageProps} />

export default App
