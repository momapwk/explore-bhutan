import { Box, Heading, Text, Stack } from "@chakra-ui/react";

export default function BhutanTravelInfo() {
  return (
    <Box
      width="100%"
      mx="auto"
      bg="white"
      p={8}
      borderRadius="xl"
      boxShadow="lg"
      border="1px solid"
      borderColor="gray.200"
    >
      <Stack gap={8}>
        <Box>
          <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
            Visa Process
          </Heading>
          <Text fontSize="lg">
            All international tourists (except Indian, Bangladeshi, and Maldivian nationals) need a visa.
            You must apply through a licensed Bhutanese tour operator. Visa clearance is issued before arrival,
            and the visa itself is stamped on arrival. Indian citizens can enter with a passport or voter ID
            and receive a permit on arrival.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
            Daily Fee (SDF)
          </Heading>
          <Text fontSize="lg">
            Bhutan charges a Sustainable Development Fee (SDF) of{" "}
            <strong>$100 USD per person per night</strong>. Indian nationals pay a reduced rate of{" "}
            <strong>₹1,200 INR per day</strong>. This fee helps support the country’s sustainability goals,
            including free healthcare and education.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
            Travel Tips
          </Heading>
          <Text fontSize="lg">
            Book your trip through an authorized tour operator. The best times to visit Bhutan are from March
            to May or September to November. Be prepared for varying climates, especially at higher altitudes.
            Dress modestly when visiting religious sites. Carry enough cash, as ATM access and card usage are
            limited outside major towns.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
