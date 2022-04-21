import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

function SectionStared() {
  return (
    <VStack
      width={"100%"}
      backgroundColor={"primary.200"}
      height={300}
      justifyContent={"center"}
      spacing={4}
      backgroundImage={{ base: "../../../public/images/bg-boost-mobile.svg", md: "../../../public/images/bg-boost-desktop.svg" }}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <Heading
        color={"white"}
        w="90%"
        mx={"auto"}
        textAlign="center"
        fontSize={{ base: "2xl", sm: '3xl', md: '4xl' }}>
        Boost your links today
      </Heading>
      <Button
        bg="primary.100"
        px={8}
        py={6}
        color="white"
        fontWeight={700}
        fontSize={"lg"}
        borderRadius="full"
      >
        Get Started
      </Button>
    </VStack>
  )
}

export default SectionStared