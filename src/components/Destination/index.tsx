import { Box, Image, Stack, Text, Flex } from '@chakra-ui/react';
import paro from '../../assets/Image/paro.jpg'
import PD from '../../assets/Image/PD.jpg'
import Tt from '../../assets/Image/Tt.jpg'
import trongsaD from '../../assets/Image/trongsaD.jpg'

const destinations = [
  {
    name: "Paro Taktsang",
    img: paro,
    description: `Paro Taktsang, or the Tiger’s Nest Monastery, is a sacred Buddhist site in Bhutan perched on a cliff 900 meters 
    above the Paro Valley. Built in the 17th century, it marks the cave where Guru Padmasambhava—who introduced Buddhism to Bhutan—is
     believed to have meditated after flying there on a tigress. The monastery is renowned for its stunning location, dramatic views, and deep spiritual significance.
      Reaching it requires a steep but scenic hike through pine forests, making it both a physical and spiritual journey.`
  },
  {
    name: "Punakha Dzong",
    img: PD,
    description: `Punakha Dzong, also known as the Palace of Great Happiness, 
    is one of Bhutan’s most stunning and historically important fortresses. Located at the confluence of the Pho Chhu and Mo
     Chhu rivers, it was built in 1637 by Zhabdrung Ngawang Namgyal and served as Bhutan’s capital until the early 20th century.

The dzong is a masterpiece of traditional Bhutanese architecture, featuring grand courtyards,
 intricate woodwork, and towering white walls. It remains the winter residence of the monastic body and hosts important 
 religious festivals like the Punakha Tshechu. Surrounded by scenic landscapes, Punakha Dzong is both a spiritual center and a 
 cultural treasure of Bhutan.`
  },
  {
    name: "Thimphu City",
    img: Tt,
    description: `Thimphu is the capital and largest city of Bhutan, nestled in a scenic valley along the banks of the Wang 
    Chhu River. As the political, economic, and cultural heart of the country, Thimphu blends modern development with traditional 
    Bhutanese heritage. Unlike many capitals, it famously has no traffic lights, relying instead on white-gloved traffic 
    police—a symbol of the city's charm and character.

Thimphu is home to important landmarks such as the Tashichho Dzong (the seat of government and the monastic body),
 the towering Buddha Dordenma statue, and the National Memorial Chorten. The city also offers vibrant weekend markets, 
 museums, and handicraft shops, showcasing Bhutan’s rich art and culture.

Surrounded by forested mountains, Thimphu provides a unique mix of tradition and modern life, making it a compelling 
destination for visitors to Bhutan.`
  },
  {
    name: "Trongsa Dzong",
    img: trongsaD,
    description: `Trongsa Dzong is one of Bhutan’s largest and most strategically important fortresses, located in central Bhutan,
     dramatically perched on a ridge overlooking the Mangde Chhu river. Built in 1648, it served as a vital seat of power for
      the royal family—traditionally, Bhutan’s kings must first serve as the Penlop (governor) of Trongsa before ascending the throne.

The dzong is a striking example of Bhutanese architecture, with multiple levels, courtyards, and over 20 temples enclosed within its
 massive whitewashed walls. Its location allowed it to control east–west trade and travel in ancient times, making it a 
 powerful military and administrative center.

Today, Trongsa Dzong remains a spiritual and historical landmark, offering panoramic views and deep cultural significance.
 It is also the site of the annual Trongsa Tshechu, a colorful religious festival that draws locals and tourists alike.`
  }
]

const TopDestination = () => {

  return (
    <Box p={4}
    width={'90%'}
    margin={"auto"}>
      <Text fontSize="3xl" fontWeight="semibold" mb={8} textAlign="center">
        Top Destinations
      </Text>

      <Stack gap={6}>
        {destinations.map((place, idx) => (
          <Flex
            key={idx}
            direction={{ base: "column", md: idx % 2 === 0 ? "row" : "row-reverse" }}
            borderRadius="2xl"
            overflow="hidden"
            shadow="md"
            _hover={{
              transform: 'scale(1.02)',
              transition: 'transform 0.3s ease',
            }}
            bg="white"
          >
            <Box flex="1">
              <Image
                src={place.img}
                alt={place.name}
                objectFit="cover"
                height={{ base: "200px", md: "100%" }}
                width="100%"
              />
            </Box>
            <Box p={6} flex="1" display="flex" flexDirection="column" justifyContent="center">
              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                {place.name}
              </Text>
              <Text fontSize="lg" color="gray.700" lineHeight="1.6">
                {place.description}
              </Text>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default TopDestination;