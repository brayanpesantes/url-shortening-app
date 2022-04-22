import { Button, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import BgImage from '../../../public/images/bg-shorten-desktop.svg'
import { getUrlShort } from '../../Services/getUrlShort'


function FromRecordLink({ setListLinks, listLinks }) {
  const [textUrl, setTextUrl] = useState("")
  const [error, setError] = useState('')

  const validateUrl = (url) => {
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    if (validateUrl(textUrl)) {
      setTextUrl('')
      setError(' ')
      await getUrlShort(textUrl).then(res => {
        if (res.ok) {
          const { result } = res
          const { original_link, full_short_link2 } = result

          setListLinks([...listLinks, { original_url: original_link, short_url: full_short_link2 }])
        }
      })
      return;

    }
    setError('Please add a link')
  }

  return (
    <Stack
      position={"absolute"}
      bottom={-20}
      w={"100%"}
      direction="column"
      alignItems="center"
    >
      <HStack
        pos={"relative"}
        as={"form"}
        onSubmit={handleSubmit}
        w={['90%', "80%"]}
        padding={[4, 12]}
        bgColor="neutral.400"
        bgImage={`url(${BgImage})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        alignContent={'center'}
        borderRadius={10}
        gap={[4, 0]}
        flexDirection={['column', 'row']}
      >

        <Input
          placeholder='Shorten a link here...'
          bg={"white"}
          height={14}
          type="text"
          value={textUrl}
          onChange={(e) => setTextUrl(e.target.value)}
          isInvalid={error !== ''}

          _placeholder={{
            color: error !== ' ' ? 'red.500' : 'black',
          }}
        />

        <Button
          type='submit'
          bg={"primary.100"}
          color={"white"}
          height={14}
          px={8}
          width={['100%', 'auto']}
        >
          Shorten It!
        </Button>

        {
          error !== "" ? <Text
            color="red.500"
            display="block"
            pos={"absolute"}
            bottom={5}
            fontSize={16}>{error}</Text> : null
        }


      </HStack>


    </Stack >
  )
}

export default FromRecordLink