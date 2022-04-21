import { Box, Center, Flex, Heading, HStack, Image, Link, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box bg={"neutral.500"} w="full">
      <HStack
        px={12}
        py={12}
        w="90%"
        mx={"auto"}
        color="white"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={"flex-start"}
      >
        <Box>
          <Image src='../../../public/images/logo-white.svg' />
        </Box>
        <Stack alignItems={"flex-start"}>
          <Stack direction={["column", 'row']} spacing={8}>
            <VStack spacing={2}>
              <Heading fontSize={["1.5rem", "2.5rem"]} mb={4}>Features</Heading>
              <Link fontSize={["1rem", "1.2rem"]}>Link Shortening</Link>
              <Link fontSize={["1rem", "1.2rem"]}>Branded Links</Link>
              <Link fontSize={["1rem", "1.2rem"]}>Analytics</Link>
            </VStack>
            <VStack>
              <Heading fontSize={["1.5rem", "2.5rem"]} mb={4}>Resources</Heading>
              <Link fontSize={["1rem", "1.2rem"]}>Blog</Link>
              <Link fontSize={["1rem", "1.2rem"]}>Developers</Link>
              <Link fontSize={["1rem", "1.2rem"]}>Support</Link>
            </VStack>
            <VStack>
              <Heading fontSize={["1.5rem", "2.5rem"]} mb={4}>Company</Heading>
              <Link fontSize={["1rem", "1.2rem"]}>About</Link>
              <Link fontSize={["1rem", "1.2rem"]}>Our Team</Link>
              <Link fontSize={["1rem", "1.2rem"]}>Careers</Link>
            </VStack>
            <Box py={8}>
              <HStack spacing={8} >
                <Link>
                  <Image src='../../../public/images/icon-facebook.svg' />
                </Link>
                <Link>
                  <Image src='../../../public/images/icon-twitter.svg' />
                </Link>
                <Link>
                  <Image src='../../../public/images/icon-pinterest.svg' />
                </Link>
                <Link>
                  <Image src='../../../public/images/icon-instagram.svg' />
                </Link>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </HStack>
    </Box>
  )
}

export default Footer