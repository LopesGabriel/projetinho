import type { AppProps } from 'next/app'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'

import Theme from '../styles/Theme'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
