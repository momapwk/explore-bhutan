import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
} from '@chakra-ui/react';

import dc from '../../assets/Image/dc.jpg';
import field from '../../assets/Image/download (6).jpg';
import throne from '../../assets/Image/Ac.jpg';
import firstFloor from '../../assets/Image/download (2).jpg';
import pazap from '../../assets/Image/download (1).jpg';
import group from '../../assets/Image/download.jpg';

const imageData = [
  { src: dc, label: 'Scene of Pazap Entering' },
  { src: field, label: 'Scene of Pazaps at the Field' },
  { src: throne, label: 'Scene of Pazaps at the Throne' },
  { src: firstFloor, label: 'Scene of Pazaps at First Floor' },
  { src: pazap, label: 'Scene of Pazap' },
  { src: group, label: "Pazap's Entertaining Group" },
];

const DromchoePage = () => {
  return (
    <Box width={'90%'} mx="auto" p={{ base: 4, md: 8 }}>
      <VStack gap={4} align="start">
        <Heading size="2xl">Annual Dromchoe</Heading>
        <Text fontSize="lg" fontStyle="italic" color="gray.600">
          The Great Punakha Dromchoe
        </Text>

        <Text fontSize="lg" textAlign="justify">
          The Punakha Dromchoe is a dramatic recreation of a 17th-century battle against the Tibetan army.
          Local militia men, known as <strong>“pazaps”</strong>, dress in traditional battle gear to reenact this historic event.
        </Text>

        <Text fontSize="lg" textAlign="justify">
          This reenactment reflects a time when Bhutan had no standing army. Instead, men from the eight <strong>Tshogchens</strong>
          (great village blocks) of Thimphu and Punakha rose up and successfully repelled the invading forces.
        </Text>

        <Text fontSize="lg" textAlign="justify">
          Their victory marked the beginning of internal peace and stability. The ceremony concludes with the
          immersion of a sacred relic into the Mochhu River, witnessed by hundreds of people gathered for the event.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6} mt={8}>
        {imageData.map((item, index) => (
          <VStack key={index} align="start" gap={2}>
            <Image
              src={item.src}
              alt={item.label}
              borderRadius="lg"
              boxShadow="md"
              _hover={{ transform: 'scale(1.02)', transition: '0.3s ease' }}
            />
            <Text fontSize="sm" color="gray.600">
              {item.label}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DromchoePage;
