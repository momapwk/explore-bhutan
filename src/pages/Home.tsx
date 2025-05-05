import AboutIntro from '../components/About'
import TopDestination from '../components/Destination'
import Testimonials from '../components/Testimonials'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <div>
      <Welcome />

      <AboutIntro />
      <TopDestination />
      
      <Testimonials />
    </div>
  )
}

export default Home