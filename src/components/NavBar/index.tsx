
import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import paro from '../../assets/Image/paro.png'
import dp from '../../assets/Image/dp.jpg'
import cb from '../../assets/Image/cb.jpeg'
import ti from '../../assets/Image/ti.jpg'
import md from '../../assets/Image/md.jpg'


const navItems = [
  { target: '/', label: 'Home', icon: paro, alt: 'Paro' },
  { target: '/destination', label: 'Destination', icon: dp, alt: 'Destination' },
  { target: '/contact', label: 'Contact', icon: cb, alt: 'Contact' },
  { target: '/travelinfo', label: 'Travel Info', icon: ti, alt: 'Travel Info' },
  { target: '/culturefestival', label: 'Culture Festival', icon: md, alt: 'Culture Festival' },
]

const NavBar: React.FC = () => {
 

  return (
    <Box as="header" bg="cyan.200" py={8} px={10}>
      <Flex justify="center" gap={10} wrap="wrap">
        {navItems.map((item) => (
          <NavLink

            key={item.target}
            to={item.target}
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
              color: isActive ? 'red' : 'black',
              fontWeight: isActive ? 'bold' : 'normal',
            })}

          >
            <Flex align="center" gap={2}>
              <Image src={item.icon} alt={item.alt} boxSize="30px" borderRadius="full" />
              <Text>{item.label}</Text>
            </Flex>
          </NavLink>
        ))}
      </Flex>
    </Box>
  );
};

export default NavBar;
