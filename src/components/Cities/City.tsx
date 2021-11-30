import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CitiesMore100 } from "../../hooks/useContinet";

export default function City({name, country, flag, image}: CitiesMore100) {
  console.log(flag)
 return (
  <Box borderRadius="4px" overflow="hidden">
    <Image src={image} alt={`${name}, ${country}`} h="170px" w="100%"/>
    <Flex
      p="6"
      align="center"
      justify="space-between"
      bg="white"
      border="1px"
      borderColor="yellow.300"
      borderTop="0"
    >
      <Flex direction="column">
        <Heading fontSize="xl" fontWeight="500">{name}</Heading>
        <Text
          color="gray.500"
          fontSize="md"
          fontWeight="500"
          mt="3"
        >
          {country}
        </Text>
      </Flex>
      <Image
        src={flag}
        alt={name}
        w="30px"
        h="30px"
        borderRadius="50%"
        objectFit="cover"
      />
    </Flex>
  </Box>
 )
}