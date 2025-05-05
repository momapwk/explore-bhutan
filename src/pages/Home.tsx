import AboutIntro from '../components/About'
import TopDestination from '../components/Destination'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <div>
      <Welcome />

      <AboutIntro />
      <TopDestination />
    </div>
  )
}

export default Home