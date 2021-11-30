import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import '../styles/slide.scss'
import { ContinentProvider } from '../hooks/useContinet'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContinentProvider>
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
    </ContinentProvider>
  )
}

export default MyApp
