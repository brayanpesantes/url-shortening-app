import { Center, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function SectionAdvance() {
  return (
    <VStack align={"center"} textAlign="center" mb={20}>
      <Heading>
        Advanced Statistics
      </Heading>
      <Text w="80%" color="neutral.300" fontWeight={500}>Track how your links are performing across the web with our
        advanced statistics dashboard.</Text>

    </VStack>
  )
}

export default SectionAdvance