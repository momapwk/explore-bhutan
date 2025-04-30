import React from 'react'
import { Box, Flex, Link, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import paro from '../../assets/Image/paro.png'
import dp from '../../assets/Image/dp.jpg'
import cb from '../../assets/Image/cb.jpeg'
import ti from '../../assets/Image/ti.jpg'
import md from '../../assets/Image/md.jpg'

const NavBar: React.FC = () => {
  const navItems = [
    { target: '/', label: 'Home', icon: paro, alt: 'Paro' },
    { target: '/destination', label: 'Destination', icon: dp, alt: 'Destination' },
    { target: '/contact', label: 'Contact', icon: cb, alt: 'Contact' },
    { target: '/travelinfo', label: 'Travel Info', icon: ti, alt: 'Travel Info' },
    { target: '/culturefestival', label: 'Culture Festival', icon: md, alt: 'Culture Festival' },
  ]

  return (
    <Box as="header" bg="black" py={8} px={10}>
      <Flex justify="center" gap={30} wrap="wrap">
        {navItems.map((item) => (
          <Link
            as={NavLink}
            target={item.target}
            key={item.target}
            color="white"
            textDecoration="none"
            _hover={{ textDecoration: 'underline', color: 'teal.200' }}
            _active={{ fontWeight: 'bold', color: 'teal.300' }}
          >
            <Flex align="center" gap={2}>
              <Image src={item.icon} alt={item.alt} boxSize="30px" borderRadius="full" />
              <Text>{item.label}</Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Box>
  )
}

export default NavBar
