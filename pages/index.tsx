import { Box, Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'


const Page: NextPage = () => {
  return (
    <Box display={'flex'} padding={8} align='center'>
      
      <Box flexGrow={'3'}>
      <Heading as='h2'>Yoav Levin</Heading>
      <p>Frontend - Fullstack developer</p>
      </Box>
    </Box>
      )
}

export default Page;
