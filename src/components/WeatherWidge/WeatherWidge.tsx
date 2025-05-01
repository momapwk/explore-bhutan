import React from 'react';
import { Box, Heading, Text, Stack, VStack } from '@chakra-ui/react';

const BhutanWeatherInfo: React.FC = () => {
  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Weather in Bhutan by Region and Season
      </Heading>

      {/* By Region */}
      <Heading as="h2" size="lg" mt={8} mb={4}>
        By Region
      </Heading>
      <VStack align="start" gap={5}>
        <Box>
          <Text fontWeight="bold" fontSize="lg">Southern Bhutan</Text>
          <Text>
            Subtropical climate. Hot and humid year-round, with heavy monsoon rains from June to September.
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="lg">Central Bhutan</Text>
          <Text>
            Temperate climate. Warm summers, cool winters. Receives moderate rainfall.
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="lg">Northern Bhutan</Text>
          <Text>
            Alpine climate. Very cold, snow in winter, with short and cool summers.
          </Text>
        </Box>
      </VStack>

      
      <Heading as="h2" size="lg" mt={10} mb={4}>
        By Season
      </Heading>
      <Stack gap={5}>
        <Box>
          <Text fontWeight="bold" fontSize="lg">Spring (March to May)</Text>
          <Text>
            Mild and pleasant weather. Rhododendrons bloom. Excellent time for trekking and nature walks.
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="lg">Summer / Monsoon (June to August)</Text>
          <Text>
            Hot and humid, especially in southern regions. Frequent rainfall and possible landslides.
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="lg">Autumn (September to November)</Text>
          <Text>
            Clear skies and cool temperatures. Ideal for festivals and trekking.
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="lg">Winter (December to February)</Text>
          <Text>
            Cold weather, especially in central and northern areas. Snow is common in high-altitude zones.
          </Text>
        </Box>
      </Stack>

      {/* Travel Tip */}
      <Heading as="h2" size="md" mt={10}>
        Best Time to Visit
      </Heading>
      <Text mt={2}>
        The best times to visit Bhutan are during spring (March–May) and autumn (September–November),
        when the weather is pleasant and the scenery is vibrant. Summer can be rainy, and winter can be very cold.
      </Text>
    </Box>
  )
}

export default BhutanWeatherInfo
