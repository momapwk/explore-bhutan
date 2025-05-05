import { Box } from "@chakra-ui/react"
import DromchoePage from "../components/DromchoePage"
import MaskDance from "../components/MaskDance"
import Dance from "../components/Dance"
import OverAllCultureFestivals from "../components/OverAllCultureFestivalls"

const CultureFestivals = () => {
  return (
    <Box>
      <DromchoePage/>
      <MaskDance/>
      <Dance/>
      <OverAllCultureFestivals/>

    </Box>
  )
}

export default CultureFestivals