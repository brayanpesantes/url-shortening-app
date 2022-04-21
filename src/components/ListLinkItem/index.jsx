import { Flex, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import LinkItem from '../LinkItem'

function ListLinkItem() {
  return (
    <VStack w="90%" spacing={5}>
      <LinkItem />
      <LinkItem />
      <LinkItem />
      <LinkItem />
    </VStack>
  )
}

export default ListLinkItem