import { Box, Button, Flex, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ImageHro from '../../../public/images/illustration-working.svg'

function Hero() {
  return (

    <Box>
      <HStack flexDirection={['column-reverse', "row"]}>
        <HStack flexBasis={"50%"} >
          <VStack
            w={["90%", "65%"]}
            margin={'auto'}
            alignItems={["center", "self-start"]}
          >
            <Heading
              fontSize={["5xl", 56]}
              fontWeight={700}
              textAlign={['center', "left"]}
            >
              More than just shorter links
            </Heading>
            <Text
              textAlign={['center', "left"]}
              color={"neutral.200"}
              fontWeight={"500"}
              mt={3}
              fontSize={["1.3rem", "1.1rem"]}
            >
              Build your brand’s recognition and get detailed insights
              on how your links are performing.
            </Text>
            <Button
              mt={[14, 6]}
              paddingX={["2.5rem", "2rem"]}
              paddingY={["1.5rem", "1.5rem"]}
              bg={"primary.100"}
              color={"white"}
              borderRadius={25}
            >
              Get Started
            </Button>
          </VStack>
        </HStack>
        <HStack flexBasis={"50%"}>
          <Image src={ImageHro} objectFit="contain" />
        </HStack>
      </HStack>
    </Box >


  )
}

export default Hero