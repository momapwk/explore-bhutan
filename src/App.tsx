import AppRoutes from "./components/AppRoutes"

import Footer from "./components/Foot"
import Header from "./components/Head"

// import NavBar from "./components/NavBar"

function App() {

  return (
    <>
    <Header/>
    {/* <NavBar/> */}
      <AppRoutes/>
      <Footer/>
    </>
  )
}

export default App
