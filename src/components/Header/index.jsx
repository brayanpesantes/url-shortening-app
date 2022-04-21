import { Button, HStack, IconButton, Image, Link } from '@chakra-ui/react'
import React from 'react'
import logo from '../../../public/images/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
function Header() {
  return (
    <HStack
      w={"80%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      h={32}
      margin={"auto"}
    >
      <HStack gap={8} >
        <Image src={logo} alt="logo" />
        <HStack gap={5} display={{ base: 'none', md: "block" }}>
          <Link href="/" color={"neutral.300"} fontWeight={"700"}>Features</Link>
          <Link href="/" color={"neutral.300"} fontWeight={"700"}>Pricing</Link>
          <Link href="/" color={"neutral.300"} fontWeight={"700"}>Recourse</Link>
        </HStack>
      </HStack>

      <HStack display={{ base: "none", md: "block " }}>
        <Button
          variant={"ghost"}
          color={"neutral.300"}
          fontWeight={"700"}
        >Login</Button>
        <Button
          bg={"primary.100"}
          color={"white"}
          fontWeight={"700"}
          borderRadius={30}
        >Sign Up</Button>
      </HStack>
      <IconButton
        aria-label='icon hamburger'
        icon={<GiHamburgerMenu size={30} />}
        variant="ghost"
        color={"neutral.300"}
        size='lg'
        display={['flex', 'none']}
      />
    </HStack >
  )
}

export default Header