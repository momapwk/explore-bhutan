import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/destination'>Destination</NavLink>
        <NavLink to='/culturefestivals'>Culture Festivals</NavLink>
        <NavLink to='/travelinfo'>Travel Info</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default NavBar