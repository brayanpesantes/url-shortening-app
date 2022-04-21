import { Box, Button, Divider, Flex, HStack, Stack, Text } from '@chakra-ui/react'

function LinkItem() {
  return (
    <Flex
      w={"100%"}
      bg="neutral.50">
      <Box
        display={"flex"}
        gap={2}
        w={"100%"}
        flexDirection={['column', "row"]}
        justifyContent={["start", "space-between"]}

      >
        <Text
          textAlign={"start"}
          w={["90%", "50%"]}
        >
          Lorem, ipsum dolor.
        </Text>
        <Divider bg={"neutral.300"} display={['block', 'none']} />
        <Box
          display={"flex"}
          gap={2}
          w={["90%", "auto"]}
          flexDirection={["column", "row"]}
        >
          <Text
            w={["100%", 'auto']}
            textAlign={["start", "auto"]}
          >
            Lorem, ipsum dolor.
          </Text>
          <Button bg={"primary.100"} color={"white"} w={["100%", "auto"]}>
            Copy
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default LinkItem