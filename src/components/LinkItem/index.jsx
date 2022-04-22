import { Box, Button, Divider, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

function LinkItem({ original_url, short_url }) {
  const [isCopy, setIsCopy] = useState(false)
  const copyToClipboard = () => {
    setIsCopy(false)
    navigator.clipboard.writeText(short_url)
    setIsCopy(true)
  }
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
          {original_url}
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
            {short_url}
          </Text>
          <Button _hover={{ opacity: .5 }} bg={isCopy ? 'primary.200' : "primary.100"} color={"white"} w={["100%", "auto"]} onClick={copyToClipboard}>
            {
              isCopy ? 'Copied!' : 'Copy'
            }
          </Button>
        </Box>
      </Stack>
    </Flex >
  )
}

export default LinkItem