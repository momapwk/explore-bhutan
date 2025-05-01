import { Box, Heading, Text, Stack, Image } from "@chakra-ui/react";
import visa from '../../assets/Image/visa.jpeg'; // Adjust path if needed

export default function BhutanTravelInfo() {
  return (
    <Box
      w="full"
      minH="100vh"
      backgroundImage={`url(${visa})`} // ← use the imported image here
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      p={6}
    >
      <Box w="10/12" mx="auto" bg="whiteAlpha.800" p={6} borderRadius="md">
        <Stack gap={6} textAlign="left">
          <Box>
            <Heading as="h3">Visa Process</Heading>
            <Text mt={2}>
              All international tourists (except Indian, Bangladeshi, and Maldivian nationals) need a visa.
              You must apply through a licensed Bhutanese tour operator. Visa clearance is issued before arrival
              and the visa itself is stamped on arrival. Indian citizens can enter with a passport or voter ID
              and receive a permit on arrival.
            </Text>
          </Box>

          <Box>
            <Image src={visa} alt="Visa application" borderRadius="md" mb={4} />
            <Heading as="h3">Daily Fee (SDF)</Heading>
            <Text mt={2}>
              Bhutan charges a Sustainable Development Fee (SDF) of <strong>$100 USD per person per night</strong>.
              Indian nationals pay a reduced rate of <strong>₹1,200 INR per day</strong>. This fee helps support
              the country’s sustainability goals, including free healthcare and education.
            </Text>
          </Box>

          <Box>
            <Heading as="h3">Travel Tips</Heading>
            <Text mt={2}>
              Book your trip through an authorized tour operator. The best times to visit Bhutan are from March
              to May or September to November. Be prepared for varying climates, especially at higher altitudes.
              Dress modestly when visiting religious sites. Carry enough cash, as ATM access and card usage are
              limited outside major towns.
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
