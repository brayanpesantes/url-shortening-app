import { Box, Button, Flex, HStack, IconButton, Image, Link, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from '../../../public/images/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
function Header({ setIsOpen, isOpen }) {
  return (
    <Box w={["90%", "80%"]}>
      <HStack
        alignItems="center"
        w="full"
        h={24}
        flexShrink={0}
      >
        <HStack spacing={14}>
          <Image src={logo} />
          <HStack display={{ base: 'none', lg: "block" }} spacing={5}>
            <Link
              href='#hero'
              color="neutral.300"
              fontWeight="700"
            >
              Features
            </Link>
            <Link
              href='#hero'
              color="neutral.300"
              fontWeight="700"
            >
              Pricing
            </Link>
            <Link
              href='#hero'
              color="neutral.300"
              fontWeight="700"
            >
              Resources
            </Link>
          </HStack>
        </HStack>
        <Spacer />
        <IconButton
          display={{ base: "flex", lg: "none" }}
          aria-label='button hamburger'
          icon={isOpen ? <MdClose size={28} /> : <GiHamburgerMenu size={28} />}
          variant="ghost"
          onClick={setIsOpen}
        />
        <HStack display={{ base: 'none', lg: "block" }}>
          <Button
            color="neutral.300"
            variant="ghost"
            fontWeight="700"
            px={6}
          >
            Login
          </Button>
          <Button
            bg="primary.100"
            borderRadius="full"
            px={6}
            fontWeight="700"
            color="white"
          >
            Sing Up
          </Button>
        </HStack>
      </HStack >
    </Box >
  )
}

export default Header