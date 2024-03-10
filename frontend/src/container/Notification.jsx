import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Notification() {
  return (
    <Flex justifyContent={"center"} mt={10}>
      <Text fontSize={20} fontWeight={600}>nothing happening at that time</Text>
    </Flex>
  )
}

export default Notification
