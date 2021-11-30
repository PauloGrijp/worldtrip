import { Flex, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Features } from '../components/Features'
import { Divisor } from '../components/Divisor'
import { Slide } from '../components/Slide'

export default function Home() {
  const continents = [
    {
      slug: '1',
      title: 'Europa',
      summary: 'O continente mais antigo',
      image: '/europe.png',
    },
    {
      slug: '2',
      title: 'América do sul',
      summary: 'Muita floresta',
      image: '/europe.png',
    }
  ]
  return (
    <div>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Banner />
        <Features />
        <Divisor />
        <Heading
          textAlign="center"
          fontWeight="500"
          fontSize={["lg", "3xl", "4xl"]}
          mb={["5","14"]}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
        <Slide continents={continents}/>
      </Flex>
    </div>
  )
}

