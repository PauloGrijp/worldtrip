import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>
      <Flex direction="column">
        <Header />
      </Flex>
    </div>
  )
}

