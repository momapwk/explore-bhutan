import {Box} from "@chakra-ui/react"

import BhutanTravelInfo from "../components/TravelInfo/VisaInfo"
import BhutanWeatherInfo from "../components/WeatherWidge/WeatherWidge"
import FAQSection from "../components/FAQAccordion"
import BhutanPackingList from "../components/PackingTips"

const TravelInfo = () => {
  return (
    <div>
      <Box>
      <BhutanTravelInfo />
      <BhutanWeatherInfo />
      <FAQSection />
      <BhutanPackingList />
      </Box>
    </div>
  )
}

export default TravelInfo