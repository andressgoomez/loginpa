import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from './Footer.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { StyledContainer, SignupDiv, TittleText, FormContainerSignup, SignupDivButton, InlineText, GridSignup } from './styles'
import { Text, Grid, FormControl, FormLabel, InputLeftElement, InputRightElement, Input, InputGroup, Button, useToast, GridItem } from '@chakra-ui/react'
import { BsPencilSquare, BsPerson } from 'react-icons/bs'
import { HiOutlineIdentification } from 'react-icons/hi'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const Signup = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    dni: '',
    password: '',
    confirmPassword: '',
  })
  const [spinner, setSpinner] = useState(false)

  const [show, setShow] = useState(false)
  const handleShowPassword = () => setShow(!show)

  const [showConfirm, setShowConfirm] = useState(false)
  const handleShowConfirmPassword = () => setShowConfirm(!showConfirm)

  const toast = useToast()
  const navigate = useNavigate()


  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    return re.test(String(password))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSpinner(true)

    if (!validateEmail(formData.email)) {
      setSpinner(false)
      return toast({
        title: 'Error',
        description: 'El email no es válido',
        status: 'error',
        duration: 2500,
        position: 'bottom-left',
        containerStyle: {
          width: '340px',
          height: '105px',
        }
      })
    } else if (formData.dni < 999999 || formData.dni > 99999999) {
      setSpinner(false)
      return toast({
        title: 'Error',
        description: 'El DNI debe tener 8 caracteres',
        status: 'error',
        duration: 2500,
        position: 'bottom-left',
        containerStyle: {
          width: '340px',
          height: '105px',
        }
      })
    } else if (!validatePassword(formData.password)) {
      setSpinner(false)
      return toast({
        title: 'Error',
        description: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial',
        status: 'error',
        duration: 2500,
        position: 'bottom-left',
        containerStyle: {
          width: '340px',
          height: '155px',
        }
      })
    } else if (formData.password !== formData.confirmPassword) {
      setSpinner(false)
      return toast({
        title: 'Error',
        description: 'Las contraseñas no coinciden',
        status: 'error',
        duration: 2500,
        position: 'bottom-left',
        containerStyle: {
          width: '340px',
          height: '105px',
        }
      })
    }

    try {
      const form = e.target
      const data = new FormData(form)

      toast({
        title: 'Te registraste correctamente.',
        description: "Bienvenido/a a la Pulpo Army.",
        status: 'success',
        duration: 3000,
        position: 'top-left',
        containerStyle: {
          width: '340px',
          height: '130px',
        },
        onCloseComplete: () => {
          setSpinner(false)
          navigate('/', { state: { formData: formData } })
        }
      })
    }
    catch (error) {

    }
  }

  return (
    <>
      <Header />
      <StyledContainer>
        <SignupDiv>
          <TittleText>
            <Text m={2}><BsPencilSquare /></Text>Registrarse
          </TittleText>
          <hr />

          <form onSubmit={handleSubmit}>
            <FormContainerSignup>
              <GridSignup>


                <FormControl isRequired>
                  <FormLabel htmlFor='firstname'>Nombre</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<BsPerson color='gray' />} />
                    <Input background='#e5e5e5' focusBorderColor='#830370' id='firstname' type='text' name='firstname' onChange={handleChange} placeholder='Ingrese su nombre' value={formData.firstname} />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor='firstname'>Apellido</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<BsPerson color='gray' />} />
                    <Input background='#e5e5e5' focusBorderColor='#830370' id='lastname' type='text' name='lastname' onChange={handleChange} placeholder='Ingrese su apellido' value={formData.lastname} />
                  </InputGroup>
                </FormControl>
                <FormControl  isRequired>
                  <FormLabel htmlFor='dni'>DNI</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<HiOutlineIdentification color='gray' />} />
                    <Input background='#e5e5e5' focusBorderColor='#830370' id='dni' type='number' name='dni' onChange={handleChange} placeholder='Ingrese su DNI' value={formData.dni} />
                  </InputGroup>
                </FormControl>
                <FormControl  isRequired>
                  <FormLabel htmlFor='email'>Correo electr&oacute;nico</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<MdOutlineEmail color='gray' />} />
                    <Input background='#e5e5e5' focusBorderColor='#830370' id='email' type='email' name='email' onChange={handleChange} placeholder='Ingrese su correo electrónico' value={formData.email} />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor='password'>Contrase&ntilde;a</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<RiLockPasswordLine color='gray' />} />
                    <Input background='#e5e5e5' focusBorderColor='#830370' id='password' type={show ? 'text' : 'password'} name='password' onChange={handleChange} placeholder='Ingrese su contrase&ntilde;a' value={formData.password} />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                        {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor='confirmPassword'>Confirmar contrase&ntilde;a</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<RiLockPasswordLine color='gray' />} />
                    <Input background='#e5e5e5' focusBorderColor='#830370' id='confirmPassword' type={showConfirm ? 'text' : 'password'} name='confirmPassword' onChange={handleChange} placeholder='Confirme su contrase&ntilde;a' value={formData.confirmPassword} />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleShowConfirmPassword}>
                        {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

              </GridSignup>
              <InlineText mt={5}>&iquest;Ya ten&eacute;s una cuenta?<Link to='/login'><Text color='#830370' fontWeight='bold'>&nbsp;Inicia sesi&oacute;n</Text></Link></InlineText>

              {spinner ? <SignupDivButton isLoading={true} h='50px' w='130px' _hover={{ bg: '#791e86', border: '1px solid black', color: 'white' }} ></SignupDivButton>
                : <SignupDivButton h='50px' _hover={{ bg: '#791e86', border: '1px solid black', color: 'white' }} type='submit'>Registrarse</SignupDivButton>}
            </FormContainerSignup>
          </form>



        </SignupDiv>
      </StyledContainer>
      <Footer />
    </>
  )
}

export default Signup