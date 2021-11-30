import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Feature from "./Feature";

export function Features() {
  const templateGrid = useBreakpointValue({ base: '1fr 1fr', lg: 'repeat(5, 1fr)' });

  return (
    <Grid
      maxW="1160px"
      w="100%"
      templateColumns={templateGrid}
      flexWrap="wrap"
      justify="space-between"
      align="center"
      mt={["10","32"]}
      mx="auto"
      gap={[1,5]}
    >
      
    <GridItem>
      <Feature icon="cocktail" text="vida noturna" />
    </GridItem>
    <GridItem>
      <Feature icon="surf" text="praia" />
    </GridItem>
    <GridItem>
      <Feature icon="building" text="moderno" />
    </GridItem>
    <GridItem>
      <Feature icon="museum" text="clássico" />
      </GridItem>
    <GridItem colSpan={[2, 2, 2, 1]}>
      <Feature icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}