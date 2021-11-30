import { Flex, Heading, Box } from "@chakra-ui/react";
import { useContinent } from "../../hooks/useContinet";

export default function ContinentBanner() {
  const { continent } = useContinent();

  return (
    <Flex
      w="100%"
      h={["150px","300px","500px"]}
      px={["0","0","36"]}
      pt={["0","0","72"]}
      bgImage={`url(${continent.continentBaner})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
    >
      <Flex
        w="1160px"
        justify={["center","center", "flex-start"]}        
      >
        <Heading
          color="gray.100"
          fontSize={["1.75rem","5xl"]}
          fontWeight="500"
          textAlign={["center","left"]}
        >
          {continent.title}
        </Heading>
      </Flex>
    </Flex>
  )
}