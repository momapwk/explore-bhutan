import { Box, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react"

const RegionWeather = () => {
  return (
    <Box p={6} width={'100%'} mx="auto">
      <Heading mb={6} size="2xl" textAlign="center">
        Bhutan Weather Widge
      </Heading>

     

      <VStack gap={6} align="stretch">
      
        <Flex bg="pink.50" p={4} borderRadius="2xl" boxShadow="md" direction={{ base: "column", md: "row" }} gap={6}>
          <Image boxSize="400px" objectFit="cover" src="https://amen-api.flamingoitstudio.net/media/attachments/spring%20season%20in%20Bhutan-4.jpg" alt="Spring in Bhutan" borderRadius="xl" />
          <VStack align="start" gap={2}>
            <Heading size="sm">Spring (March – May)</Heading>
            <Text>Clear skies, daytime temperatures between 10–25°C
              Spring is Bhutan's most colorful season. Hills and forests erupt in vibrant blossoms, especially rhododendrons, cherry trees, and magnolias. It marks the awakening of Bhutan’s rich biodiversity after the cold.
              The season is perfect for trekking, photography, and exploring the valleys. Paro Tshechu, one of Bhutan’s largest festivals, is held in April and features masked dances and vibrant rituals.
              Spring offers comfortable daytime temperatures, making it ideal for exploring the country. The skies are generally clear, providing stunning views of the Himalayas and other landscapes. 
              Compared to the summer monsoon season, spring has lower rainfall and humidity. While the days are warm, the nights can be cool, especially in higher altitude areas. 
              Bhutan's spring is fairly short, usually lasting from early March to mid-April, when the summer rains get underway. Temperatures are mild, and melting snows give way to gorgeous wildflowers covering the hillsides, while both humidity and rainfall are low.
            </Text>
          </VStack>
        </Flex>

        <Flex bg="yellow.100" p={4} borderRadius="2xl" boxShadow="md" direction={{ base: "column", md: "row" }} gap={6}>
          <Image boxSize="400px" objectFit="cover" src="https://data.tibettravel.org/assets/images/bhutan/bhutan-weather--in-june480.jpg" alt="Summer Monsoon in Bhutan" borderRadius="xl" />
          <VStack align="start" gap={2}>
            <Heading size="sm">Summer / Monsoon (June – August)</Heading>
            <Text>Warm and humid, 15–30°C with heavy rainfall
            Summer in Bhutan is a time of enchantment and celebration, where the land comes alive with lush greenery and vibrant cultural festivals. As the monsoon rains nourish the countryside, you are treated to a feast for the senses, with verdant landscapes,
             colorful traditions, and a sense of tranquility that permeates the air.One of the defining features of summer in Bhutan is the lush greenery that blankets the countryside. The monsoon rains transform the arid landscapes into a vibrant tapestry of colors,
              with rolling hillsides and terraced fields adorned in shades of emerald and jade. From the valleys of Paro to the remote corners of Bumthang, you can immerse yourself in the breathtaking beauty of Bhutan's natural landscapes.
              Summer is also a prime time for wildlife viewing in Bhutan, as the rainforests teem with activity. You may have the chance to spot rare and endangered species such as the takin, Bengal tiger, and black-necked crane in their natural habitats. Guided wildlife excursions offer insight into Bhutan's
               rich biodiversity and conservation efforts.Summer is a great time to visit Bhutan with our Bhutan travel packages. Plan your summer trip by knowing the best time to travel to Bhutan and managing your expenses with insights on the Bhutan travel cost. For a luxurious summer getaway, explore our luxury travel in Bhutan options. If you're travelling from Malaysia,
                our guide on travel to Bhutan from Malaysia provides valuable insights. Druk Asia, the best Bhutan travel agency, ensures a memorable summer trip to Bhutan



            </Text>
          </VStack>
        </Flex>

       
        <Flex bg="orange.100" p={4} borderRadius="2xl" boxShadow="md" direction={{ base: "column", md: "row" }} gap={6}>
          <Image boxSize="400px" objectFit="cover" src="https://www.esikkimtourism.in/bhutan/wp-content/uploads/2019/10/phobijikha-valley-bhutan-image.jpg" alt="Autumn in Bhutan" borderRadius="xl" />
          <VStack align="start" gap={2}>
            <Heading size="sm">Autumn (September – November)</Heading>
            <Text>Dry and cool, 10–20°C with excellent visibility
              Autumn is the most popular season for tourists in Bhutan. Skies are crystal clear, ideal for mountain views and trekking. The valleys glow golden with ripening rice fields, and harvest festivals fill the calendar.
              Major events include Thimphu Tshechu and Jambay Lhakhang Drup, where ancient spiritual rituals are performed in vibrant costumes. It’s a perfect time to explore both cultural and natural attractions.
              is considered a prime time to visit, offering pleasant weather, clear skies, and vibrant cultural festivals. The monsoon season recedes, revealing stunning mountain views and providing favorable conditions for trekking and outdoor activities.
               Autumn also brings colorful foliage, making it a photographer's paradise.  The weather is generally cool but comfortable, making it ideal for outdoor activities. 
               The monsoon clouds have passed, offering clear skies and breathtaking mountain views. Rainfall is minimal, making it a pleasant time to travel. Many villages celebrate harvests, and the Thimphu Tshechu, a major festival, also takes place during this time. 
               
            </Text>
          </VStack>
        </Flex>


        <Flex bg="blue.100" p={4} borderRadius="2xl" boxShadow="md" direction={{ base: "column", md: "row" }} gap={6}>
          <Image boxSize="400px" objectFit="cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6IFowoesMu8nvYbkCgLSeJ1q87ZxQ0xBNg&s" alt="Winter in Bhutan" borderRadius="xl" />
          <VStack align="start" gap={2}>
            <Heading size="sm">Winter (December – February)</Heading>
            <Text>Cold and dry, sub-zero in the north, 5–17°C in the south
            Winter offers a quiet, introspective experience. Snowfall blankets highland towns like Bumthang and Haa, while low-altitude areas such as Punakha remain sunny and pleasant.
              Tourist sites are uncrowded, and wildlife sightings are common. The Phobjikha Valley becomes home to black-necked cranes, celebrated during the Black-necked Crane Festival in November.
              Lower valleys, however, remain relatively mild with dry weather and fewer tourists, making it a great time for cultural tours and peaceful exploration. 
              Bhutan experiences cold winters, especially in high-altitude areas. Valleys and lower regions remain relatively moderate, while higher elevations may experience snowfall. 
              Winter months generally have low precipitation, with occasional snowfall in higher regions. While the nights are cold, days are often warm with bright sunshine. 
              Higher passes and mountain regions experience snow, making some high-altitude treks impossible. Lower valleys may experience light snow. 
              Winter is a popular time for cultural tours and peaceful exploration, as fewer tourists visit during this season. Winter in Bhutan offers opportunities for low-altitude treks, attending festivals like the Black-necked Crane Festival, and enjoying the stunning snowy landscapes. 
            </Text>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  )
}

export default RegionWeather
