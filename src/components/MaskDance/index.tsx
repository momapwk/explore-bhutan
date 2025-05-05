import {
    Box,
    Flex,
    Image,
    Text,
    VStack,
  } from "@chakra-ui/react";
  
  const BhutanCulturalInfo = () => {
    return (
      <Box width={'90%'} mx="auto" p={6}>
        <Flex direction={{ base: "column", md: "row" }} gap={6}>
     
          <Box flex="2">
            <Image
              src="/src/assets/Image/mask.jpg"
              alt="Bhutanese festival mask dance"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>
  
          <Box flex="4">
            <VStack gap={4} align="start">
              <Text fontSize="lg" textAlign="justify">
                <strong>The Himalayan Kingdom of Bhutan</strong> is a serene and enchanting country
                nestled in the Eastern Himalayas. With its breathtaking mountains, deep valleys,
                and diverse flora and fauna, Bhutan stands as a symbol of peace and cultural preservation.
              </Text>
  
              <Text fontSize="lg" textAlign="justify">
                Deeply rooted in Buddhism, Bhutanese culture permeates every aspect of daily life.
                The people proudly follow traditional customs, including a national dress code, and
                exhibit humility, friendliness, and simplicity. Despite the advent of modern technologies
                like television, mobile phones, and the internet in recent years, the essence of
                Bhutanese life remains largely untouched.
              </Text>
            </VStack>
          </Box>
        </Flex>
  
        
        <Box mt={8}>
          <VStack gap={4} align="start">
            <Text fontSize="lg" textAlign="justify">
              The Bhutanese people's love for peace and harmony is showcased beautifully through their festivals.
              Chief among them is the <strong>Tshechu</strong> — a sacred festival held annually in monasteries
              and dzongs across the country. The Tshechus in <strong>Thimphu</strong> and <strong>Paro</strong>
              are especially popular.
            </Text>
  
            <Text fontSize="lg" textAlign="justify">
              These festivals are held in honor of <strong>Guru Rinpoche</strong>, the saint who introduced
              Buddhism to Bhutan. They feature sacred mask dances, spiritual rituals, and vibrant gatherings
              that bring communities together in joyous celebration.
            </Text>
  
            <Text fontSize="lg" textAlign="justify">
              Other significant festivals include the <strong>Dochula Druk Wangyel Festival</strong>,
              the <strong>Bumthang festivals</strong>, and the unique <strong>Chortenkora festival</strong>
              in Trashiyangtse — all highlighting Bhutan’s deep spiritual heritage and rich cultural tapestry.
            </Text>
          </VStack>
        </Box>
      </Box>
    );
  };
  
  export default BhutanCulturalInfo
  