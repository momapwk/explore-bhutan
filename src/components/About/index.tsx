import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AboutIntro = () => {
  return (
    <MotionBox
      mt={4}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      width={'90%'}
      margin={"auto"}
    >
      <Heading fontSize="2xl" fontWeight="bold" mb={6}>
        Bhutan: A Happy and Peaceful Country
      </Heading>

      <Stack gap={5}>
        <Text fontSize="lg" color="black">
          Bhutan is a small country in the Himalayas, located between India and China. Though small in size, it is world-renowned for its peace, cleanliness, and the happiness of its people.
        </Text>

        <Text fontSize="lg" color="black">
          Unlike many countries that focus on economic growth, Bhutan values well-being. It uses Gross National Happiness (GNH) to guide national progress—focusing on health, safety, and joy.
        </Text>

        <Text fontSize="lg" color="black">
          Nature plays a big role in Bhutanese life. With vast forests, rivers, and mountains, Bhutan is one of the few carbon-negative countries in the world, meaning it absorbs more carbon than it produces.
        </Text>

        <Text fontSize="lg" color="black">
          Buddhism is the main religion, shaping a peaceful way of life. People wear traditional clothes, live in colorful homes, and celebrate vibrant festivals. The king is respected and deeply loved for his care and humility.
        </Text>

        <Text fontSize="lg" color="black">
          Tourism is limited and sustainable. Visitors pay a daily fee and must travel with a guide—helping preserve Bhutan’s unique culture and natural environment.
        </Text>

        <Text fontSize="lg" color="black">
          In short, Bhutan is a rare gem—a nation that values simplicity, happiness, and deep respect for nature and community.
        </Text>
      </Stack>
    </MotionBox>
  );
};

export default AboutIntro;
