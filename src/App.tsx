import { ToastContainer } from 'react-toastify';


import AppRoutes from "./components/AppRoutes"


import Header from "./components/Head"
import NavBar from "./components/NavBar"
import Footer from "./components/Foot"

function App() {

  return (
    <>
    <Header/>
    <NavBar/>
      <AppRoutes/>
     
      <Footer/>
      <ToastContainer position='bottom-right' autoClose={5000} />
    </>
  )
}

export default App
