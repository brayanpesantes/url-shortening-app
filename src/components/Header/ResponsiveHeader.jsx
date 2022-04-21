import React from 'react'
import { motion } from 'framer-motion'
import { Divider, Link, VStack, Button } from '@chakra-ui/react'

function ResponsiveHeader() {
  return (
    <VStack
      w="90%"
      bg="primary.200"
      position="absolute"
      top={"24"}
      spacing={{ base: 4 }}
      py={{ base: 4 }}
      borderRadius="2xl"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      zIndex={'modal'}
    >
      <Link color="white" fontWeight="700" fontSize="xl">Features</Link>
      <Link color="white" fontWeight="700" fontSize="xl">Pricing</Link>
      <Link color="white" fontWeight="700" fontSize="xl">Resource</Link>
      <Divider w="80%" />
      <Button
        variant="ghost"
        color="white"
        fontWeight={700}
        paddingX={4}
        w="80%"
      >
        Login
      </Button>
      <Button
        color="white"
        bgColor="primary.100"
        fontWeight={700}
        px={4}
        w="80%"
        borderRadius={"full"}
      >Sing Up</Button>
    </VStack>
  )
}

export default ResponsiveHeader