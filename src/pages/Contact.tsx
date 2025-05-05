import ContactForm from "../components/ContactForm";
import { Box, Flex } from "@chakra-ui/react";
import contact from '../assets/Image/contact.jpeg';
import ContactDetails from '../components/ContactDetails'
const Contact = () => {
  return (
    <Box
      backgroundImage={`url(${contact})`}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      p={4}
    >
      <Flex
        height="100%"
        minHeight="100vh"
        justify="center"
        align="center"
      >
        <ContactForm />
        <Box ml={-4}>
          <ContactDetails/>
        </Box>
      </Flex>
    </Box>
  )
}

export default Contact
