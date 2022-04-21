import { Box, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import SectionAdvance from './SectionAdvance'
import CardAdvance from '../CardAdvance'
import BrandRecognition from '../../../public/images/icon-brand-recognition.svg'
import DetailedRecords from '../../../public/images/icon-detailed-records.svg'
import FullyCustomizable from '../../../public/images/icon-fully-customizable.svg'
function ListAdvance() {
  return (
    <Box py={16} w="90%">
      <SectionAdvance />
      <Stack spacing={20} mt={14} w="100%" direction={{ base: 'column', lg: "row" }} >
        <CardAdvance
          image={BrandRecognition}
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        />
        <CardAdvance
          image={DetailedRecords}
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
"
        />
        <CardAdvance
          image={FullyCustomizable}
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </Stack>

    </Box >
  )
}

export default ListAdvance