import { Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const padding = useBreakpointValue({ base: '4', xl: '0' });
  const widthAirplane = useBreakpointValue({ base: '300px', lg: '430px' });

  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url(/bannerBg.jpg)"
      bgSize="cover"
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat="no-repeat"
    >
      <Flex
        maxW="1160px"
        w="100%"
        mx="auto"
        px={padding}
        justify={['center', 'space-between']}
        align="center"
      >
        <Flex direction="column">
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2xl", "2xl", "4xl"]}
          >
            5 continentes,<br />
            infinitas possibilidades.
          </Heading>
          <Text
            maxW={["100%", "100%", "100%", "550px"]}
            mt="5"
            color="gray.300"
            fontSize={["0.8rem","xl"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Image
          src="/airplane.png"
          alt="Avião amarelo voando nas nuvens"
          w={widthAirplane}
          ml="8"
          display={['none','none','block']}
          transform="translateY(48px)"
        />
      </Flex>
    </Flex>
  )
}