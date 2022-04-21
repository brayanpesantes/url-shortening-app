import { Box, Button, Flex, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ImageHero from '../../../public/images/illustration-working.svg'

function Hero() {
  return (
    <Stack spacing={8}>
      <Box
        flexBasis={"100%"}
        pos="relative"
      >
        <Box pos={"relative"} height={300} >
          <Image
            src={ImageHero}
            pos={"absolute"}
            objectFit="cover"
            objectPosition={"left"}
            height={"full"}
            w="full"
            right={-3} />
        </Box>
      </Box>

      <Box flexBasis={"100%"}>
        <VStack
          w="90%"
          marginX={"auto"}
          spacing={4}
        >
          <Heading
            textAlign={"center"}
            fontSize={"4xl"}
            fontWeight={700}
            color="neutral.500"
          >
            More than just shorter links
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={"large"}
            fontWeight={500}
            color="neutral.300"

          >Build your brand’s recognition and get detailed insights on how your links are performing.</Text>
          <Button
            bg="primary.100"
            borderRadius="full"
            px={10}
            py={5}
            fontWeight="700"
            color="white"
          >Get Started </Button>
        </VStack>
      </Box>
    </Stack >


  )
}

export default Hero