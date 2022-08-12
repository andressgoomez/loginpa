import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { StyledHeader, Logo, LoginSignUpButtons, LoginButton, SignUpButton, StyledGrid } from '../Styles.jsx'
import { Spacer, GridItem, Center } from '@chakra-ui/react'
import { FaUserPlus, FaUserCheck, FaSignOutAlt } from 'react-icons/fa'

const Header = () => {

  const location = useLocation()

  return (
    <>
      <StyledHeader>
        <StyledGrid>

          <Spacer></Spacer>


          <Center>
            {location.pathname === '/logged'
              ?
              <Logo src="/PAlogo.png" alt='Pulpo Army' w={250} />
              :
              <Link to='/'><Logo src="/PAlogo.png" alt='Pulpo Army' w={250} /></Link>}
          </Center>

          {location.pathname != '/logged' ?
            <LoginSignUpButtons >
              <Link to='/'><LoginButton fontSize='smaller' colorScheme='whiteAlpha' _hover={{ bg: '#9518a5', border: '1px solid white' }} leftIcon={<FaUserCheck />}>
                Iniciar Sesi&oacute;n
              </LoginButton></Link>
              <Link to='/signup'><SignUpButton fontSize='smaller' colorScheme='whiteAlpha' _hover={{ bg: '#9518a5', border: '1px solid white' }} leftIcon={<FaUserPlus />}>
                Registrarse
              </SignUpButton></Link>
            </LoginSignUpButtons>
            :
            <LoginSignUpButtons >
              <Link to='/'><LoginButton colorScheme='whiteAlpha' _hover={{ bg: '#9518a5', border: '1px solid white' }} leftIcon={<FaSignOutAlt />}>
                Cerrar Sesi&oacute;n
              </LoginButton></Link>
            </LoginSignUpButtons>}

        </StyledGrid>
      </StyledHeader>
    </>
  )
}

export default Header