import {Box} from "@chakra-ui/react"

import BhutanTravelInfo from "../components/TravelInfo/VisaInfo"
import BhutanWeatherInfo from "../components/WeatherWidge/WeatherWidge"
import FAQSection from "../components/FAQAccordion"

const TravelInfo = () => {
  return (
    <div>
      <Box>
      <BhutanTravelInfo />
      <BhutanWeatherInfo />
      <FAQSection />
      </Box>
    </div>
  )
}

export default TravelInfo