import { Box, Heading, Text } from "@chakra-ui/react"
import intro from '../../assets/videos/intro.mp4'

const Welcome = () => {
  return (
    <div>
      <Box textAlign={"left"}>
         <Heading  fontSize={'30px'} mb={3} mt={3} fontWeight={"bold"}>
                    Explore Bhutan
                  </Heading>
                  <Text fontSize="lg"mt={2}>
                    "Happiness is a place — welcome to the kingdom where nature, peace, and culture thrive together." To 
                    know about Bhutan read the passage below.<br />
                    </Text>
                   <Heading textAlign='inherit' mt={3} mb={3} fontSize={'20px'} fontWeight={'bold'}> Bhutan: A Happy and Peaceful Country</Heading>
<Text textAlignLast='left' mt={3} fontSize='lg'>
Bhutan is a small country in the mountains, between India and China.<br />
 Even though it is not very big, Bhutan is known around the world for being peaceful,<br />
clean, and full of happy people. One special thing about Bhutan is that it doesn’t just <br />
care about money. Instead of measuring success by how rich the country is, Bhutan uses something <br />
called Gross National Happiness (GNH). This means the government works to make sure people are healthy, <br />
safe, and happy. Bhutan is full of forests, rivers, and mountains. The people love nature and work <br />
hard to protect it. That’s why Bhutan is one of the only countries in the world that takes in more<br />
 pollution than it creates. Most people in Bhutan follow Buddhism, a peaceful religion. They <br />
 celebrate many festivals, wear traditional clothes, and live in colorful homes and villages. The <br />
 king of Bhutan is also very kind and cares a lot about his people. Tourism in Bhutan is different <br />
 from other places. Tourists must pay a special fee and travel with a guide. This helps protect Bhutan’s <br />
 culture and nature from too many visitors. In short, Bhutan is a beautiful and special country that<br />
  shows the world how to live simply, happily, and with respect for nature.
                  </Text>


</Box>  
<video  width="700px" controls>
  <source src={intro} type="video/mp4"/>
  <source src={intro} type="video/ogg"/>
  Your browser does not support HTML video.
</video>   
    </div>
    
  )
}

export default Welcome