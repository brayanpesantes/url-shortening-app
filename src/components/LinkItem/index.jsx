import { Button, Flex, HStack, Text } from '@chakra-ui/react'

function LinkItem() {
  return (
    <Flex
      w={"100%"}
      //  mt={32} 
      bg="neutral.50">
      <HStack
        w={"100%"}
        justifyContent={"space-between"}
      >
        <Text>Lorem, ipsum dolor.</Text>
        <HStack>
          <Text>
            Lorem, ipsum dolor.
          </Text>
          <Button bg={"primary.100"} color={"white"}>
            Copy
          </Button>
        </HStack>
      </HStack>
    </Flex>
  )
}

export default LinkItem