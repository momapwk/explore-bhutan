import {
  Box,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import welcome from "../../assets/videos/intro.mp4"

const MotionBox = motion(Box)

const Welcome = () => {

  return (
    <Container maxW="19xl" py={{ base: 8, md: 12 }} >
    <Flex w={'14/16'} h={'500px'} bg={'red'}>
  <video
    autoPlay
    muted
    loop
    playsInline
    controls
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  >
    <source src={welcome} type="video/mp4" />
  </video>
</Flex>

      <MotionBox
        mt={10}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bolder" mb={4} textAlign='center'>
          Explore Bhutan
        </Heading>


        <Text fontSize="lg" mb={6} color={'black'}>

          “Happiness is a place — welcome to the kingdom where nature, peace, and culture thrive together.”
          <br />
          To explore more about Bhutan, read the passage below.
        </Text>



      </MotionBox>
    </Container>
  )
}

export default Welcome