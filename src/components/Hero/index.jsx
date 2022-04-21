import { Box, Button, Flex, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ImageHro from '../../../public/images/illustration-working.svg'

function Hero() {
  return (

    <Box>
      <HStack >
        <HStack flexBasis={"50%"} >
          <VStack w={"65%"} margin={'auto'} alignItems="self-start">
            <Heading
              fontSize={56}
              fontWeight={700}
            >
              More than just shorter links
            </Heading>
            <Text color={"neutral.200"} fontWeight={"500"} mt={3}>
              Build your brand’s recognition and get detailed insights
              on how your links are performing.
            </Text>
            <Button mt={6} bg={"primary.100"} color={"white"} borderRadius={25}  >Get Started</Button>
          </VStack>
        </HStack>
        <HStack flexBasis={"50%"}>
          <Image src={ImageHro} />
        </HStack>
      </HStack>
    </Box >


  )
}

export default Hero