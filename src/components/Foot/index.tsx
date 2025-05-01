import { Box, Text, Heading, Flex, Image, HStack, Link,Icon,Circle,} from '@chakra-ui/react'
import {FaFacebookF,FaWhatsapp,FaInstagram,FaTelegramPlane,} from 'react-icons/fa'
import dragon1 from '../../assets/Image/dragon1.jpeg'
import dragon2 from '../../assets/Image/dragon2.jpeg'

const Footer = () => {
  return (
    <Box
      bg="cyan.200"
      color="black"
      py={8}
      width="100%"
    >
      <Flex
        maxW="100%"
        mx="auto"
        justify="space-between"
        align="center"
        px={4}
        flexWrap="wrap"
        textAlign="center"
      >
  
  <Image src={dragon1} alt="Left Logo" boxSize="150px" borderRadius="full" objectFit="cover" />

     
        <Box textAlign="center">
          <Heading fontWeight="bold" size="md" mb={4}>Contact Us</Heading>
          <Text>Email: grouptwo@gmail.com</Text>
          <Text>Phone: +975-12345678</Text>
          <Text>Address: Tsirang, Bhutan</Text>
          <Text>Location: Damphu Municipal Hall</Text>
          <Heading fontSize="20px" fontWeight="bold" mt={3}>
           EXPLORE MORE ABOUT BHUTAN
          </Heading>

          <HStack wordSpacing={4} justify="center" mt={6}>
            <Link href="https://facebook.com" >
              <Circle bg="blue" size="30px">
                <Icon as={FaFacebookF} boxSize={6} color="white" />
              </Circle>
            </Link>

            <Link href="https://wa.me/1234567890" >
              <Circle bg="green" size="30px">
                <Icon as={FaWhatsapp} boxSize={6} color="white" />
              </Circle>
            </Link>

            <Link href="https://instagram.com" >
              <Circle
                size="30px"
                bg="linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)"
              >
                <Icon as={FaInstagram} boxSize={6} color="white" />
              </Circle>
            </Link>

            <Link href="https://telegram.me/yourchannel" >
              <Circle bg="skyblue" size="30px">
                <Icon as={FaTelegramPlane} boxSize={6} color="white" />
              </Circle>
            </Link>
          </HStack>

          <Text mt={4} fontSize="sm" color="black">
            ©2025 All rights reserved.
          </Text>
        </Box>

        <Image
          src={dragon2}
          alt="right logo"
          boxSize="150px"
          borderRadius="full"
          objectFit="cover"
        />
      </Flex>
    </Box>
  )
}

export default Footer
