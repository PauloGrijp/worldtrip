import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { useContinent } from "../../hooks/useContinet";
import { Header } from "../../components/Header";
import ContinentBanner from "../../components/ContinentBanner";
import Content from "../../components/Content";
// import Cities from "../../components/Cities";
// import Loading from "../components/Loading";

export default function Continent() {
  const { continent } = useContinent();

  return (    
    <Flex direction="column">
      <Head>
        <title>{`${continent.title} - WorldTrip`}</title>       
      </Head>

      <Header />
      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content />
        {/* <Cities continent={continent} /> */}
      </Flex>
    </Flex>    
  )
}
