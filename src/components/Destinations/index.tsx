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
import paro from '../../assets/Image/paro.jpg'
import PD from '../../assets/Image/PD.jpg'
import Tt from '../../assets/Image/Tt.jpg'
import pv from '../../assets/Image/pv.jpg'
import bumthangv from '../../assets/Image/bumthangv.jpg'
import haav from '../../assets/Image/haav.jpg'
import trongsaD from '../../assets/Image/trongsaD.jpg'
import lhuentse from '../../assets/Image/lhuentse.jpg'
import noimage from '../../assets/Image/noimage.avif'
import chelelapass from '../../assets/Image/chelelapass.jpg'

interface Destination {
  name: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    name: "Paro Taktsang",
    image: paro,
    description:
      "Also known as Tiger’s Nest Monastery, perched on a cliffside in the Paro Valley.",
  },
  {
    name: "Punakha Dzong",
    image: PD,
    description:
      "A stunning fortress at the confluence of the Pho Chhu and Mo Chhu rivers.",
  },
  {
    name: "Thimphu",
    image: Tt,
    description:
      "Bhutan’s capital city, home to cultural landmarks and modern life mixed with tradition.",
  },
  {
    name: "Phobjikha Valley",
    image: pv,
    description:
      "A serene glacial valley known for the endangered black-necked cranes.",
  },
  {
    name: "Bumthang Valley",
    image: bumthangv,
    description:
      "The spiritual heartland of Bhutan with ancient temples and beautiful landscapes.",
  },
  {
    name: "Haa Valley",
    image: haav,
    description:
      "A quiet, less-traveled valley known for its natural beauty and authentic Bhutanese culture.",
  },
  {
    name: "Trongsa Dzong",
    image: trongsaD,
    description:
      "A massive and strategically located fortress in central Bhutan, offering panoramic views.",
  },
  {
    name: "Lhuentse",
    image: lhuentse,
    description:
      "A remote and traditional region known for beautiful weavings and sacred sites.",
  },
  {
    name: "Chele La Pass",
    image: chelelapass,
    description:
      "The highest motorable point in Bhutan, offering dramatic views of the Himalayan range.",
  },
];

const BhutanDestinations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const noInfoDestination: Destination = {
    name: "Destination Not Found",
    image: noimage,
    description: "No destinations matched your search.",
  };

  return (
    <Box p={[4, 8]}>
      <Heading
        mb={4}
        textAlign="center"
        color="black"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
      >
        Top Destinations in Bhutan
      </Heading>

      <Box maxW="400px" mx="auto" mb={6}>
        <Input
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((place) => (
            <Box
              key={place.name}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              _hover={{
                transform: "scale(1.02)",
                transition: "transform 0.3s",
              }}
            >
              <Image
                src={place.image}
                alt={`Image of ${place.name}`}
                height="300px"
                width="100%"
                objectFit=""
              />
              <Stack p={4}>
                <Heading fontSize="xl" color="gray.700">
                  {place.name}
                </Heading>
                <Text color="gray.600">{place.description}</Text>
              </Stack>
            </Box>
          ))
        ) : (
          
          <Box
            gridColumn="1 / -1"
            textAlign="center"
            py={10}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            backgroundColor="gray.50"
            p={6}
            width={"500px"}
           m={"auto"}
          >
            <Image
              src={noInfoDestination.image}
              alt="Destination Not Found"
              maxW="300px"
              mx="auto"
              mb={4}
            />
            <Heading fontSize="xl" color="gray.600" mb={2}>
              {noInfoDestination.name}
            </Heading>
            <Text color="gray.500">{noInfoDestination.description}</Text>
          </Box>
        )}
      </SimpleGrid>
    </Box>
  )
}

export default BhutanDestinations
