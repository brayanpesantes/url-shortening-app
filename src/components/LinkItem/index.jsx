import { Box, Button, Divider, Flex, HStack, Stack, Text } from '@chakra-ui/react'

function LinkItem() {
  return (
    <Flex
      w={"100%"}
      bg="white"
      py={3}
      borderRadius={"lg"}>
      <Stack
        direction={"column"}
        spacing={1}
        w={"90%"}
        margin="auto"
      >
        <Text
          textAlign={"start"}
          w={"90%"}
          color="neutral.500"
          fontWeight={"500"}
          px={4}
          py={2}
        >
          https://frontendmentor.io
        </Text>
        <Divider bg={"neutral.300"} display={['block', 'none']} />
        <Box
          display={"flex"}
          gap={2}
          w={["90%", "auto"]}
          flexDirection={["column", "row"]}
        >
          <Text
            textAlign={"start"}
            w={"90%"}
            color="primary.100"
            fontWeight={"500"}
            px={4}
            py={1}
          >
            https://frontendment
          </Text>
          <Button bg={"primary.100"} color={"white"} w={["100%", "auto"]}>
            Copy
          </Button>
        </Box>
      </Stack>
    </Flex >
  )
}

export default LinkItem