import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  VStack,
  Link,
  Highlight,
} from "@chakra-ui/react";

const festivals = [
  {
    title: "7 Days Paro Tsechu Festival Tour of Bhutan",
    date: "Apr 8–12, 2025",
    image: "/src/assets/Image/mask.jpg",
    locations: "Paro - Thimphu - Punakha - Paro",
  },
  {
    title: "7 Days Thimphu Tsechu Festival of Bhutan",
    date: "Oct. 02–04, 2025",
    image: "/src/assets/Image/download (9).jpg",
    locations: "Paro - Thimphu - Punakha - Paro",
  },
  {
    title:
      "7 Days Punakha Festival Tour Bhutan (2025 Drubchen & Tsechu Festivals)",
    date: "",
    image: "/src/assets/Image/images (6).jpg",
    locations: "Paro - Punakha - Gangtey - Thimphu - Paro",
  },
];

const OverAllCultureFestivals = () => {
  const imagePaths = [
    "/src/assets/Image/mask.jpg",
    "/src/assets/Image/phomo.jpg",
    "/src/assets/Image/images (3).jpg",
    "/src/assets/Video/download (7).jpg",
    "/src/assets/Image/Dance.jpeg",
    "/src/assets/Video/images (1).jpg",
    "/src/assets/Image/images (2).jpg",
    "/src/assets/Image/md.jpg",
    "/src/assets/Image/images (5).jpg",
    "/src/assets/Image/download (8).jpg",
    "/src/assets/Image/Dance.jpeg",
    "/src/assets/Image/images (4).jpg",
  ];

  return (
    <Box>
    
      <Box position="relative" px={4} py={6}>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={2}>
          {imagePaths.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Festival ${i + 1}`}
              objectFit="cover"
              borderRadius="md"
              w="100%"
              h={{ base: "100px", md: "150px" }}
            />
          ))}
        </SimpleGrid>

     
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="orange.400"
          color="white"
          px={6}
          py={4}
          borderRadius="md"
          textAlign="center"
          boxShadow="lg"
          zIndex="10"
        >
          <Heading fontSize={{ base: "lg", md: "2xl" }}>
            Over All Bhutan Tsechu Festival
          </Heading>
        </Box>
      </Box>

      <Box p={10} bg="gray.50">
        <Text mb={6} fontSize={'lg'}>
          <strong>Bhutan Festivals : Bhutan Tshechu Festivals </strong>
          <br />
          Bhutan culture’s exotic, mysterious, and spiritual side is fully
          embodied in its “Tshechu festivals.” For culture or photography lovers,
          experiencing at least one Tshechu is a must.
          <br /><br />
          The Tshechu Festival is Bhutan’s most important religious celebration,
          held in honor of Guru Rinpoche, who brought Buddhism to Bhutan in the
          8th century. The highlight is the Cham mask dances — elaborate and
          symbolic performances by monks and laymen, each telling sacred stories
          or moral teachings. On the final day, a massive thongdrol (sacred
          scroll) is unfurled before dawn, believed to bless all who see it.
          <br /><br />
          These festivals are also major social events. People wear their finest
          clothes and jewelry, gather with friends and family, and share in the
          vibrant communal spirit.
          <br /><br />
          <strong>Why Choose a Bhutan Festival ?</strong>
          <br />
          For cultural travelers, these festivals offer deep insight into
          Bhutanese life and spirituality. For photographers, they provide
          colorful, dramatic moments — from the masks and costumes to the
          lively expressions of the people.
          <br /><br />
          <strong>How to Plan?</strong>
          <br />
          Every region has its own Tshechu. The Paro, Punakha, and Thimphu
          Tshechus are the most popular. Dates vary based on the Bhutanese
          lunar calendar, so working with a local travel agency ensures you don’t
          miss them.
          <br /><br />
          <strong>We specialize in Bhutan Festival </strong> — helping you
          navigate festival dates, local logistics, and spiritual highlights.
        </Text>
      </Box>

      
      <Box p={10} bg="gray.50">
        <Heading as="h2" size="xl" mb={4}>
          Bhutan Festivals
        </Heading>

        <Text mb={6} fontSize={'lg'}>
          <Highlight
            query={["Bhutan Festivals", "Paro Tsechu", "Punakha Tsechu", "Thimphu Tsechu"]}
            styles={{ bg: "yellow.100", px: "1" }}
          >
            Discover Bhutan's Grand Festivals with Ease. Our curated Bhutan
            Festivals feature the grand Paro Tsechu, Punakha Tsechu, and
            Thimphu Tsechu.
          </Highlight>{" "}
          As a local travel agency, we simplify your planning with deep
          knowledge of the Bhutanese calendar. Our expert guides provide
          insights into the festivals’ meanings, symbolism, and rituals — plus
          photography tips for magical moments.
          <br /><br />
          We also include Bhutan's cultural highlights for a full immersive
          journey. Want a specific festival in your itinerary?{" "}
          <Link color="teal.500" href="#">Customize</Link> your Bhutan festival
          tour. Don’t miss other amazing celebrations like the Black-Necked Crane
          Festival and Punakha Drubchen.
        </Text>

      
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {festivals.map((festival, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              shadow="md"
              bg="white"
            >
              <Box height="200px" width="100%" overflow="hidden">
                <Image
                  src={festival.image}
                  alt={festival.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>

              <Box p={4}>
                <VStack  gap={2}>
                  <Text fontWeight="bold">{festival.title}</Text>
                  {festival.date && (
                    <Text fontSize="sm">{festival.date}</Text>
                  )}
                  <Text fontSize="sm" color="gray.600">
                    {festival.locations}
                  </Text>
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default OverAllCultureFestivals
