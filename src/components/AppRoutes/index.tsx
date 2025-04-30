
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Destinations from '../../pages/Destinations'
import CultureFestivals from '../../pages/CultureFestivals'
import TravelInfo from '../../pages/TravelInfo'
import Contact from '../../pages/Contact'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/destination' element={<Destinations/>}></Route>
        <Route path='/culturefestivals' element={<CultureFestivals/>}></Route>
        <Route path='/travelinfo' element={<TravelInfo/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

    </Routes>
  )
}

export default AppRoutes