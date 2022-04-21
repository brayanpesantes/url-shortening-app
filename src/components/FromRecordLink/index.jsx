import { Button, HStack, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import BgImage from '../../../public/images/bg-shorten-desktop.svg'
function FromRecordLink() {
  return (
    <Stack
      position={"absolute"}
      bottom={-20}
      w={"100%"}
      direction="column"
      alignItems="center"

    >
      <HStack w={"80%"}
        padding={12}
        bgColor="neutral.400"
        bgImage={`url(${BgImage})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        alignContent={'center'}
        borderRadius={10}
      >
        <Input
          placeholder='Shorten a link here...'
          bg={"white"}
          height={14}
        />
        <Button
          bg={"primary.100"}
          color={"white"}
          height={14}
          px={8}
        >
          Shorten It!
        </Button>
      </HStack>
    </Stack >
  )
}

export default FromRecordLink