import { Flex, HStack, Stack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import LinkItem from '../LinkItem'

function ListLinkItem({ listLinks }) {
  useEffect(() => {
    console.log('list', listLinks);
    localStorage.setItem('data', JSON.stringify(listLinks))

  }, [listLinks])
  return (
    <VStack w="90%" spacing={5}>
      {
        listLinks && listLinks.map((item, index) => {
          return (
            <LinkItem
              key={index}
              original_url={item.original_url}
              short_url={item.short_url}
            />
          )
        })
      }
    </VStack>
  )
}

export default ListLinkItem