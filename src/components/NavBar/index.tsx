import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';


const navItems = [
  { to: '/', label: 'Home', },
  { to: '/destination', label: 'Destination', },
  { to: '/contact', label: 'Contact',  },
  { to: '/travelinfo', label: 'Travel Info' },
  { to: '/culturefestival', label: 'Culture Festival' },
];





const NavBar: React.FC = () => {
 

  return (
    <Box as="header" bg="black" py={8} px={10}>
      <Flex justify="center" gap={10} wrap="wrap">
        {navItems.map((item) => (
          <NavLink

            key={item.to}
            to={item.to}
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
              color: isActive ? 'red' : 'white',
              fontWeight: isActive ? 'bold' : 'normal',
            })}

          >
            <Flex align="center" gap={2}>
              <Text>{item.label}</Text>
            </Flex>
          </NavLink>
        ))}
      </Flex>
    </Box>
  );
};

export default NavBar;
