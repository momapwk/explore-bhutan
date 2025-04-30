import { Box, Heading, Text} from "@chakra-ui/react"

const Header = () => {
  return (
    <Box
      as="header"
      bg="black"
      color="white"
      py={4}
      px={6}
      textAlign="center"
      boxShadow="md"
    >
          <Heading as="h1" size="xl">
            Explore Bhutan
          </Heading>
          <Text fontSize="lg"mt={2}>
            "Happiness is a place — welcome to the kingdom where nature, peace, and culture thrive together."
          </Text>
    </Box>
  )
}

export default Header
