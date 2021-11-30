import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Banner />
      </Flex>
    </div>
  )
}

