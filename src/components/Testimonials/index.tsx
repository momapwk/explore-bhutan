import { Box, Text, SimpleGrid, VStack } from "@chakra-ui/react";


const testimonials = [
    {
      name: "Christine M. (USA)",
      quote: " loved the personalized hikes and cooking lessons during her homestay in Ha Valley, calling her trip “amazing.”.",
    },
    {
      name: "Jessica Nabongo",
      quote: "a global traveler, found Bhutan unforgettable and praised her experience with Breathe Bhutan.",
    },
    {
      name: "Selma & Raymond",
      quote: " appreciated the warm hospitality and cultural richness organized by Ideal Travel Creations.",
    },
    {
      name: "Michelle",
      quote: "highlighted her spiritual journey, praising access to sacred sites with Sky Travels.",
    },
    {
      name: "Kailash Rathod (India)",
      quote: " Called it a first-class tour with a guide who felt like family.",
    },
    {
      name: "Parduman K. (UK)",
      quote: "Praised his knowledgeable guide and great driver",
    },
    {
      name: "Catherine Lee",
      quote: "I have had a brilliant time in Bhutan thanks largely to our guide Chencho and driver Tsering. The tour has been magical, full of wonderful sights and experiences.",
    },
    {
      name: " John Lu",
      quote: "My trip to Bhutan was exceptional. I'm glad I chose Druk Asia, through its subsidiary Soul Trips, for the entire duration of my stay.",
    },
    {
      name: "Chloe from France",
      quote: "The breathtaking views and untouched beauty made it my favorite destination ever.",
    },
 
  ];

const Testimonials = () => {

  return (
    <Box  py={12}    width={'90%'}
    margin={"auto"}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" mb={10} textAlign="center" color="black">
          What Travelers Say
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {testimonials.map((t, idx) => (
            <Box
              key={idx}
              p={6}
              borderRadius="2xl"
              shadow="lg"
            >
              <VStack spaceX={4} textAlign="center">
                <Text fontStyle="italic" color="gray" fontSize={'lg'}>
                  “{t.quote}”
                </Text>
                <Text fontWeight="semibold" color="black">
                  — {t.name}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials