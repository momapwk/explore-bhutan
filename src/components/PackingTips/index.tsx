import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
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
  {
    category: 'Miscellaneous',
    items: [
      'Daypack for hikes',
      'Sunglasses',
      'Reusable water bottle',
      'Travel journal',
      'Snacks (energy bars, trail mix)',
      'Ziplock bags or dry sacks',
      'Umbrella or compact raincoat',
    ],
  },
];

const BhutanPackingList: React.FC = () => {
  return (
    <Box p={6} width={'100%'} mx="auto">
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Bhutan Packing Checklist
      </Heading>

      <Stack gap={6}>
        {packingList.map((section, index) => (
          <Box
            key={index}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="md"
            p={6}
            bg="white"
          >
            <Heading as="h2" size="lg" color="teal.600" mb={1} fontWeight={'bold'}>
              {section.category}
            </Heading>

            <Box height="2px" bg="gray.400" mb={4} borderRadius="full" width={'90%'} margin={'auto'}/>

            <Stack gap={1} pl={2} fontSize={'lg'} width={'90%'} margin={'auto'}>
              {section.items.map((item, itemIndex) => (
                <Text key={itemIndex}>• {item}</Text>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default BhutanPackingList;
