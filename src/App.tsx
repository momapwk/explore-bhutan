import AppRoutes from "./components/AppRoutes"
import BhutanDestinations from "./components/Destinations"

import Footer from "./components/Foot"
import Header from "./components/Head"

import NavBar from "./components/NavBar"

function App() {

  return (
    <>
    <Header/>
    <NavBar/>
      <AppRoutes/>
      <BhutanDestinations/>
      <Footer/>
    </>
  )
}

export default App
