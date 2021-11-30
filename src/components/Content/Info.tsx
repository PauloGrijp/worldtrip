import { 
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { useContinent } from "../../hooks/useContinet";


export default function Info() {
  const { continent } = useContinent();
  return (
    <Flex alignItems="center" justifyContent="space-between">
    <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
        {continent.countries}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          países
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
        {continent.languages}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          línguas
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
        {continent.cities}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          cidades +100

          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  as={RiInformationLine}
                  w={["10px","16px"]}
                  h={["10px","16px"]}
                  ml="1"
                  cursor="pointer"
                  color="gray.400"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="yellow.300" color="gray.700">
              <PopoverArrow bg="yellow.700"/>
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">{continent.cities_list}</PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  )
}