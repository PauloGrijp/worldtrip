import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Features } from '../components/Features'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Banner />
        <Features />
      </Flex>
    </div>
  )
}

