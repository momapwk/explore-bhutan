import {Box} from "@chakra-ui/react"

import BhutanTravelInfo from "../components/TravelInfo/VisaInfo"
import BhutanWeatherInfo from "../components/WeatherWidge/WeatherWidge"

const TravelInfo = () => {
  return (
    <div>
      <Box>
      <BhutanTravelInfo />
      <BhutanWeatherInfo />
      </Box>
    </div>
  )
}

export default TravelInfo