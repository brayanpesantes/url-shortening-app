import { Box, Button, Divider, Flex, HStack, Link, Stack, useBoolean, VStack } from '@chakra-ui/react'
import Header from './components/Header'
import ResponsiveHeader from './components/Header/ResponsiveHeader'
import Hero from './components/Hero'
import FromRecordLink from './components/FromRecordLink'
import ListLinkItem from './components/ListLinkItem'
import { AnimatePresence } from 'framer-motion'
import ListAdvance from './components/ListAdvance'
import SectionStared from './components/SectionStared'
import Footer from './components/Footer'


function App() {

  const [isOpen, setIsOpen] = useBoolean()
  return (

    <VStack
      w="full"
      minH={"100vh"}
      overflow="hidden"
      spacing={0}
      pos="relative"

    >
      <VStack pos={"relative"} bg="neutral.50" w="full">
        <Header setIsOpen={setIsOpen.toggle} isOpen={isOpen} />

        < AnimatePresence exitBeforeEnter>
          {isOpen && <ResponsiveHeader />}
        </AnimatePresence>
        <Hero />
        <FromRecordLink />
        <Box p={14} />
      </VStack>
      <VStack bg={"neutral.100"} spacing={0} w="full">
        <Box p={14} />
        <ListLinkItem />
        <ListAdvance />
        <SectionStared />
        <Footer />

        {/* <Text> */}



        {/* 


        

         

          
          Contact</Text> */}
      </VStack>
    </VStack >


  )

}

export default App


const MenuResponsive = () => {

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

