import { Box, Button, Heading, Input, Stack, Textarea } from "@chakra-ui/react"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"



const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    emailjs.sendForm("service_xky3dqu", "template_7ypyrla", formRef.current, "o6l8r1UilREkWtFPn")
      .then(() => {
        toast.success("Message sent successfully!")
        formRef.current?.reset()
      })
      .catch(() => {
        toast.error("Failed to send message.")
      })
  }

  return (
    <Box
      bg="cyan.200"
      p={10}
      borderRadius="md"
      shadow="lg"
      w="40%"
    >
      <Heading size="lg" mb={6} color="black" textAlign="left">Contact Us</Heading>
      <form ref={formRef} onSubmit={sendEmail}>
        <Stack gap={4}>
          <Input placeholder="Enter your Name" name="user_name" bg="white" required />
          <Input placeholder="Enter a valid email address" type="email" name="user_email" bg="white" required />
          <Textarea placeholder="Your Message" name="message" bg="white" rows={5} required />
          <Button type="submit" colorScheme="blue" mt={2} w="fit-content">Submit</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default ContactForm