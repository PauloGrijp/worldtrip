import { Flex, Grid, Image, Icon } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';

export function Header() {
    const { asPath } = useRouter();
    const isNotHome = asPath !== '/';
  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      h={["50px","100px"]}
      mx="auto"
      px="1rem"
      align="center"
      justify="center"
    >
      <Grid
        maxW="1160px"
        w="100%"
        h="100%"
        mx="auto"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {isNotHome && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start"/>
            </a>
          </Link>
        )}
        <Image
          src="/Logo.svg"
          alt="Um avição voando sobre o nome da marca world trip"
          w={["81px","184px"]}
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}