import React, { useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from './Footer.jsx'
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledContainer, LoginDivButton, Logo } from '../Styles.jsx'
import { Box, Badge, Text, Avatar, AvatarBadge, Center } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import ReactCardFlip from 'react-card-flip';

const Logged = () => {

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }

  const navigate = useNavigate()
  const data = useLocation();


  useEffect(() => {
    if (data.state == null) {
      navigate('/')
    }
  }, [])

  const property = {
    name: data.state?.state?.formData.firstname,
    lastname: data.state?.state?.formData.lastname,
    email: data.state?.state?.formData.email,
    dni: data.state?.state?.formData.dni,
    title: 'Miembro oficial de la Pulpo Army',
    date: new Date().toLocaleDateString(),
  }
  const name = property.name + ' ' + property.lastname

  return (
    <>
      <Header />
      <StyledContainer>

        <Box as="h1" fontSize="2xl" fontWeight="semibold" mb={6}>
          ¡Bienvenido/a&#33;
        </Box>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

          <Box boxShadow='2xl' height={300} width={300} maxW='md' borderWidth='3px' borderRadius='lg' overflow='hidden' bg='white'>
            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
                <Avatar bg='purple' name={name}>
                  <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar>
                <Text fontWeight='bold' px={3}>{name}</Text>
                <Badge variant='subtle' px='2' colorScheme='teal'>
                  Verificado
                </Badge>
              </Box>

              <Box
                mt='4'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {property.title}
              </Box>

              <Box>
                <Box m={2} display='flex' color='gray.600' fontSize='sm'>
                  Desde: {property.date}
                </Box>
              </Box>
              <Box>
                <Box m={2} display='flex' color='gray.600' fontSize='sm'>
                  Email: <Text mx={1} fontWeight='bold'>{property.email}</Text>
                </Box>
              </Box>
              <Box>
                <Box m={2} display='flex' color='gray.600' fontSize='sm'>
                  DNI: <Text mx={1} fontWeight='bold'>{property.dni}</Text>
                </Box>
              </Box>
              <Center>
                <LoginDivButton onClick={handleClick} _hover={{ bg: '#791e86', border: '1px solid black', color: 'white' }} m={5}>
                  <AiFillStar size={16} />&nbsp;Ver Novedades
                </LoginDivButton>
              </Center>
            </Box>
          </Box>


          <Box boxShadow='2xl' height={300} width={300} maxW='md' borderWidth='3px' borderRadius='lg' overflow='hidden' bg='white'>
            <Box p='6'>
              <Center>
                <Logo src="/velkoz.png" alt='Pulpo Army' w={200} />
              </Center>
              <Center>
                <LoginDivButton onClick={handleClick} _hover={{ bg: '#791e86', border: '1px solid black', color: 'white' }} m={5}>
                  PROXIMAMENTE
                </LoginDivButton>
              </Center>
            </Box>
          </Box>
        </ReactCardFlip>


      </StyledContainer>
      <Footer />
    </>
  )
}

export default Logged