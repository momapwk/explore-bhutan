import {Button,Field,Fieldset,Stack,Input,Textarea,Box,Center,} from "@chakra-ui/react"

import backgroundImage from '../../assets/Image/contact.jpeg'

const ContactForm = () => {
  return (
    <Box
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      position="center"
      minH="100vh"
      py={20}
    >
      <Center h="100%">
        <Box bg="whiteAlpha.900" border="1px solid" borderColor="black" borderRadius="lg" p="10px" maxW="md" w="full"
        >
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
                <Input name="name" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Email address</Field.Label>
                <Input name="email" type="email" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Message</Field.Label>
                <Textarea name="message" />
              </Field.Root>
            </Fieldset.Content>

            <Button type="submit" alignSelf="flex-start" mt={5}>
              Submit
            </Button>
          </Fieldset.Root>
        </Box>
      </Center>
    </Box>
  )
}

export default ContactForm
