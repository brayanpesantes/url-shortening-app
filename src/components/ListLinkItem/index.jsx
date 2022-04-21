import { HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import LinkItem from '../LinkItem'

function ListLinkItem() {
  return (
    <Stack w={"100%"} alignItems="center">
      <VStack w={"80%"} gap={10} p={0} m={0}>
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
      </VStack>
    </Stack>
  )
}

export default ListLinkItem