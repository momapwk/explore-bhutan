import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';

const packingList = [
  {
    category: 'Essential Documents',
    items: [
      'Passport (valid for at least 6 months)',
      'Bhutan visa clearance letter',
      'Travel insurance documents',
      'Photocopies of important documents',
      'Passport-sized photos',
    ],
  },
  {
    category: 'Clothing',
    items: [
      'Warm jacket (light down or fleece)',
      'Waterproof jacket/windbreaker',
      'Long-sleeve shirts',
      'Moisture-wicking T-shirts',
      'Trekking pants',
      'Dress pants or skirt (temple visits)',
      'Thermal underwear (for colder months)',
      'Undergarments and sleepwear',
      'Scarf or shawl',
    ],
  },
  {
    category: 'Footwear',
    items: ['Comfortable walking shoes/hiking boots', 'Sandals or flip-flops', 'Warm socks'],
  },
  {
    category: 'Toiletries & Personal Care',
    items: [
      'Toothbrush and toothpaste',
      'Shampoo and soap (eco-friendly)',
      'Sunscreen (high SPF)',
      'Lip balm with SPF',
      'Moisturizer',
      'Hand sanitizer',
      'Wet wipes',
      'Feminine hygiene products',
      'Travel towel',
    ],
  },
  {
    category: 'Medications & Health',
    items: [
      'Personal medications (with prescriptions)',
      'Altitude sickness tablets',
      'Basic first aid kit',
      'Insect repellent',
      'Water purification tablets or filtered bottle',
    ],
  },
  {
    category: 'Electronics',
    items: [
      'Mobile phone & charger',
      'Universal power adapter (Type D, F, G)',
      'Power bank',
      'Camera with batteries/memory card',
      'Headlamp or flashlight',
    ],
  },
 
];

const BhutanPackingList: React.FC = () => {
  return (
    <Box p={6} width="100%" mx="auto" mb={16}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Bhutan Packing Checklist
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={12}>
        {packingList.map((section, index) => (
          <Box
            key={index}
            mt={ 4 }
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="md"
            p={6}
            bg="white"
          >
            <Box>
              <Heading
                as="h2"
                size="lg"
                color="black"
                mb={1}
                fontWeight="bold"
                textAlign="center"
              >
                {section.category}
              </Heading>

              <Box
                height="2px"
                bg="gray.400"
                mb={4}
                borderRadius="full"
                width="90%"
                mx="auto"
              />

              <Stack gap={1} fontSize="lg" width="90%" >
                {section.items.map((item, itemIndex) => (
                  <Text key={itemIndex}>• {item}</Text>
                ))}
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BhutanPackingList;
