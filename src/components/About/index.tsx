import { Box, Heading, Text } from "@chakra-ui/react"
import {motion} from 'framer-motion'

const MotionBox = motion(Box)

const AboutIntro = () => {
  return (
<MotionBox>
<Heading fontSize="xl" fontWeight="bold" mb={4}>
          Bhutan: A Happy and Peaceful Country
        </Heading>

        <Text fontSize="lg" color={'black'} lineHeight="taller">
          Bhutan is a small country in the mountains, between India and China. Even though it is not very big,
          Bhutan is known around the world for being peaceful, clean, and full of happy people.
          <br /><br />
          One special thing about Bhutan is that it doesn’t just care about money. Instead of measuring success by how rich
          the country is, Bhutan uses something called Gross National Happiness (GNH). This means the government works to
          make sure people are healthy, safe, and happy.
          <br /><br />
          Bhutan is full of forests, rivers, and mountains. The people love nature and work hard to protect it. That’s why
          Bhutan is one of the only countries in the world that takes in more pollution than it creates.
          <br /><br />
          Most people in Bhutan follow Buddhism, a peaceful religion. They celebrate many festivals, wear traditional clothes,
          and live in colorful homes and villages. The king of Bhutan is also very kind and cares a lot about his people.
          <br /><br />
          Tourism in Bhutan is different from other places. Tourists must pay a special fee and travel with a guide. This helps
          protect Bhutan’s culture and nature from too many visitors.
          <br /><br />
          In short, Bhutan is a beautiful and special country that shows the world how to live simply, happily, and with respect
          for nature.
        </Text>

</MotionBox>

  )
}

export default AboutIntro