import { Box, Button, Heading, Input, Stack, Textarea } from "@chakra-ui/react"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  // ✅ Make sure these env vars exist
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    toast.error("Missing EmailJS environment variables. Check your .env file.")
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!")
        formRef.current?.reset()
      })
      .catch((error) => {
        console.error("EmailJS error:", error)
        toast.error("Failed to send message. Check console for details.")
      })
  }

  return (
    <Box bg="#0B0C10" p={10} borderRadius="md" shadow="lg" w="40%">
      <Heading size="lg" mb={6} color="white">
        Contact Us
      </Heading>
      <form ref={formRef} onSubmit={sendEmail}>
        <Stack gap={4}>
          <Input placeholder="Enter your Name" name="user_name" bg="white" required />
          <Input
            placeholder="Enter a valid email address"
            type="email"
            name="user_email"
            bg="white"
            required
          />
          <Textarea placeholder="Your Message" name="message" bg="white" rows={5} required />
          <Button colorScheme="gray" mt={2} w="fit-content" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export default ContactForm
