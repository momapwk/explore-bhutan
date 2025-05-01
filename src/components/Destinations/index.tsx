import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Image } from "@chakra-ui/react";

interface Destination {
  name: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    name: "Paro Taktsang",
    image:
    "src/assets/Image/paro.png ",
    description:
      "Also known as Tiger’s Nest Monastery, perched on a cliffside in the Paro Valley.",
  },
  {
    name: "Punakha Dzong",
    image:
      "src/assets/Image/PD.jpg ",
    description:
      "A stunning fortress at the confluence of the Pho Chhu and Mo Chhu rivers.",
  },
  {
    name: "Thimphu",
    image:
      "src/assets/Image/Tt.jpg ",
    description:
      "Bhutan’s capital city, home to cultural landmarks and modern life mixed with tradition.",
  },
  {
    name: "Phobjikha Valley",
    image:
      "src/assets/Image/pv.jpg ",
    description:
      "A serene glacial valley known for the endangered black-necked cranes.",
  },
  {
  name: "Bumthang Valley",
    image: "src/assets/Image/bumthangv.jpg ",
    description:
      "The spiritual heartland of Bhutan with ancient temples and beautiful landscapes.",
  },
  {
    name: "Haa Valley",
    image: "src/assets/Image/haav.jpg",
    description:
      "A quiet, less-traveled valley known for its natural beauty and authentic Bhutanese culture.",
  },
  {
    name: "Trongsa Dzong",
    image: "src/assets/Image/trongsaD.jpg",
    description:
      "A massive and strategically located fortress in central Bhutan, offering panoramic views.",
  },
  {
    name: "Lhuentse",
    image: "src/assets/Image/lhuentse.jpg",
    description:
      "A remote and traditional region known for beautiful weavings and sacred sites.",
  },
  {
    name: "Chele La Pass",
    image: "src/assets/Image/chelelapass.jpg",
    description:
      "The highest motorable point in Bhutan, offering dramatic views of the Himalayan range.",
  },
];

const BhutanDestinations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={[4, 8]}>
      <Heading mb={4} textAlign="center" color="teal.600">
        Top Destinations in Bhutan
      </Heading>

      <Box maxW="400px" mx="auto" mb={6}>
        <Input
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {filteredDestinations.map((place) => (
          <Box
            key={place.name}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            _hover={{ transform: "scale(1.02)", transition: "transform 0.3s" }}
          >
            <Image
              src={place.image}
              alt={`Image of ${place.name}`}
              height="300px"
              width="100%"
              objectFit="cover"
            />
            <Stack p={4}>
              <Heading fontSize="xl" color="gray.700">
                {place.name}
              </Heading>
              <Text color="gray.600">{place.description}</Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default BhutanDestinations
