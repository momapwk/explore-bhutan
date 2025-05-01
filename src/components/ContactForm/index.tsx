import { Button, Field, Fieldset, Stack, Input, Textarea, Box, Center,} from "@chakra-ui/react"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify'

import backgroundImage from "../../assets/Image/contact.jpeg"



const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    emailjs
      .sendForm(
        "service_xky3dqu",    
        "template_7ypyrla",   
        formRef.current,
        "o6l8r1UilREkWtFPn"     
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text)
          toast.success("Message sent successfully!")
          formRef.current!.reset()
        },
        (error) => {
          console.error("Email error:", error.text)
          toast.error("Failed to send message.")
        }
      )
  }

  return (
    <Box
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      position="center"
      minH="100vh"
      py={20}
    >
      <Center h="100%">
        <Box
        
          bg="whiteAlpha.900"
          border="1px solid"
          borderColor="black"
          borderRadius="lg"
          p="10px"
          maxW="md"
          w="full"
        >
          <form   ref={formRef}
          onSubmit={sendEmail}>
          <Fieldset.Root size="lg">
            <Stack>
              <Fieldset.Legend>Contact Information</Fieldset.Legend>
              <Fieldset.HelperText>
                Please submit your contact information below.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input name="user_name" required />
              </Field.Root>

              <Field.Root>
                <Field.Label>Email address</Field.Label>
                <Input name="user_email" type="email" required />
              </Field.Root>

              <Field.Root>
                <Field.Label>Message</Field.Label>
                <Textarea name="message" required />
              </Field.Root>
            </Fieldset.Content>

            <Button type="submit" alignSelf="flex-start" mt={5}>
              Submit
            </Button>
          </Fieldset.Root>
          </form>
        </Box>
      </Center>
    </Box>
  )
}

export default ContactForm
