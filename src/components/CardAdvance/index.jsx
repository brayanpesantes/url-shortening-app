import { Box, Heading, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'

function CardAdvance({ image, title, text }) {
  return (
    <Box
      pos="relative"
      bg="white"
      borderRadius="md"
      textAlign={"center"}
      position="relative"
      p={8}
      className="borderChild"
    >
      <Box
        pos={"absolute"}
        bg="primary.200"
        borderRadius={"full"}
        padding={4}
        top={-8}
        left={["38%", "45%"]}
      >
        <Image
          src={image}
          display="block"

          w={"full"}
          h={"full"}
          objectFit={"cover"} />
      </Box>
      <Heading
        pt={10}
        fontSize="x-large"
      >
        {title}
      </Heading>
      <Text mt={5} >{text}</Text>
    </Box >
  )
}

export default CardAdvance