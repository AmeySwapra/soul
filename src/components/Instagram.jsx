import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Instagram() {
  return (
    <>
      <Box py={20}>
                <Container maxW="container.xl" textAlign="center">
                  <Text color="gray.500" textTransform="uppercase" mb={4}>
                    follow on
                  </Text>
                  <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={12}>
                    Our Instagram
                  </Heading>
                </Container>
              </Box>
    </>
  )
}

export default Instagram