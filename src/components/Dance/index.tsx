import { Box, Heading, Text, Highlight } from "@chakra-ui/react";

const Dance = () => {
  return (
    <Box width={'90%'} mx="auto" p={5}>

      <Box borderRadius="md" mb={4} w="100%" h={{ base: "200px", md: "400px" }}>
        <iframe
          width="90%"
          height="100%"
          src="https://www.youtube.com/embed/vQmBKUhM2TU?autoplay=1&mute=1&loop=1&playlist=vQmBKUhM2TU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{  objectFit: "cover" }}
        ></iframe>
      </Box>

      <Heading as="h1" size="xl" mb={2}>
        Discover Bhutan's unique cultural festivals
      </Heading>

      <Text fontWeight="semibold" color="black" mb={2} fontSize={'lg'}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        What's the story
      </Text>

      <Text mb={3} fontSize={'lg'}>
        <Highlight
          query={["Bhutan", "Himalayas"]}
          styles={{ fontWeight: "bold", color: "black" }}
        >
          Bhutan, a mystical kingdom nestled in the Himalayas, is renowned for its vibrant culture and traditions.
        </Highlight>
      </Text>

      <Text mb={3} fontSize={'lg'}>
        This secluded paradise offers travelers an opportunity to witness unique cultural festivals that are not only visually stunning but also deeply spiritual.
      </Text>

      <Text mb={6} fontSize={'lg'}>
        Each festival, or <i>tshechu</i>, is a blend of religious ceremony and community gathering, making Bhutan a captivating destination for those seeking authentic cultural experiences.
      </Text>

      <Box bg="red.50" p={4} borderLeft="4px solid red" borderRadius="md">
        <Text fontSize="lg" color="red.600" fontWeight="bold">
          Paro Festival
        </Text>

        <Heading as="h3" size="md" mt={1} mb={2}>
          Paro Tshechu: 
        </Heading>

        <Text mb={2} fontSize={'lg'}>
          <i>Paro Tshechu</i>, celebrated annually in spring, showcases Bhutan's vibrant culture with colorful costumes, masked dances, and local music, attracting locals and tourists.
        </Text>

        <Box bg="red.50" p={4} borderLeft="4px solid red" borderRadius="md">
          <Text fontSize="lg" color="red.600" fontWeight="bold">
            Thimphu Festival
          </Text>

          <Heading as="h3" size="md" mt={1} mb={2}>
            Thimphu Tshechu: 
          </Heading>

          <Text mb={2} fontSize={'lg'}>
            <i>Thimphu Tshechu</i>, Held in the capital city, Thimphu Tshechu is another significant event that showcases
            the rich cultural heritage of Bhutan. Taking place in autumn, this festival fills the Tashichho Dzong with
            life as monks perform sacred dances wearing elaborate masks and costumes. It's an excellent opportunity for 
            visitors to experience Bhutanese hospitality and enjoy traditional foods while soaking in the festive atmosphere.
          </Text>

          <Box bg="red.50" p={4} borderLeft="4px solid red" borderRadius="md">
            <Text fontSize="lg" color="red.600" fontWeight="bold">
              Punakha Festival
            </Text>

            <Heading as="h3" size="md" mt={1} mb={2}>
              Punakha Tshechu: 
            </Heading>

            <Text mb={2} fontSize={'lg'}>
              <i>Punakha Tshechu</i>, Punakha Drubchen commemorates Bhutan's victory over Tibetan invaders in the 17th century.
              This unique festival features a dramatic reenactment of the battle with local men dressed as soldiers performing
              mock fights. The event takes place in Punakha Dzong, offering stunning views against the backdrop of ancient architecture.
              It's a powerful reminder of Bhutan's history and resilience.
            </Text>

            <Text fontSize={'lg'}>
              The festival's highlight is the unveiling of a giant thangka painting of Guru Rinpoche, believed to bestow blessings on all viewers.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dance;
