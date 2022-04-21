import { Box, Stack, VStack } from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import FromRecordLink from './components/FromRecordLink'
import ListLinkItem from './components/ListLinkItem'

function App() {
  return (
    <Box w="100vw" minH={["100vh"]}>
      <Box
        bg={"neutral.50"}
        position="relative"
        padding={0}
        margin={0}
      >
        <Header />
        <Box p="3rem 0 8rem 0">
          <Hero />
        </Box>

        <FromRecordLink />
      </Box>

      {/* Part Two */}

      <VStack bg={"neutral.100"}
        padding={0}
        margin={0}
      >
        <Box pt={'24'}>

        </Box>
        <ListLinkItem />
        {/* <Text> */}



        {/* 




          Advanced Statistics

          Track how your links are performing across the web with our
          advanced statistics dashboard.

          Brand Recognition

          Boost your brand recognition with each click. Generic links don’t
          mean a thing. Branded links help instil confidence in your content.

          Detailed Records

          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.

          Fully Customizable

          Improve brand awareness and content discoverability through customizable
          links, supercharging audience engagement.

          Boost your links today

          Get Started

          Features

          Link Shortening
          Branded Links
          Analytics

          Resources

          Blog
          Developers
          Support

          Company

          About
          Our Team
          Careers
          Contact</Text> */}
      </VStack>
    </Box >
  )
}

export default App