import { Box, Text, Heading, Flex, Image } from '@chakra-ui/react'
import dragon1 from '../../assets/Image/dragon1.jpeg'
import dragon2 from '../../assets/Image/dragon2.jpeg'

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      py={8}
      position="fixed"
      bottom={0}
      width="100%"
    >
      <Flex
        maxW="1000px"
        mx="auto"
        justify="space-between"
        align="center"
        px={4}
      >
  
  <Image src={dragon1} alt="Left Logo" boxSize="150px" borderRadius="full" objectFit="cover" />

     
        <Box textAlign="center">
          <Heading fontWeight="bold" size="md" mb={4}>Contact Us</Heading>
          <Text>Email: grouptwo@gmail.com</Text>
          <Text>Phone: +975-12345678</Text>
          <Text>Address: Tsirang, Bhutan</Text>
          <Text>Location: Damphu Municipal Hall</Text>
          <Text></Text>
          <Heading fontSize="20px" fontWeight="bold" mt={3}>BHUTAN</Heading>
        </Box>

       
        <Image src={dragon2} alt="Right Logo" boxSize="150px" borderRadius="full" objectFit="cover" />
      </Flex>
    </Box>
  )
}

export default Footer
