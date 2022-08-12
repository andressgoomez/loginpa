import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledContainer, LoginDiv, TittleText, FormContainer, StyledFormControl, InlineText, LoginDivButton } from '../Styles.jsx'
import { Text, FormLabel, InputGroup, InputLeftElement, InputRightElement, Button, Input, useToast } from '@chakra-ui/react'
import { BiLogIn } from 'react-icons/bi'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'

const Login = () => {
  const [show, setShow] = useState(false)
  const handleShowPassword = () => setShow(!show)

  const toast = useToast()
  const navigate = useNavigate()
  const data = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const form = event.target
      const dataForm = new FormData(form)
      const email = dataForm.get('email')
      const password = dataForm.get('password')

      if (email === data?.state?.formData.email) {
        if (password == data.state.formData.password) {
          navigate('/logged', { state: data })
        } else {
          return toast({
            title: 'Error',
            description: 'El email o la contrase&ntilde;a no son correctos',
            status: 'error',
            duration: 2500,
            position: 'bottom-left',
            containerStyle: {
              width: '340px',
              height: '130px',
            }
          })
        }
      } else {
        return toast({
          title: 'Error',
          description: 'El email o la contrase&ntilde;a no son correctos',
          status: 'error',
          duration: 2500,
          position: 'bottom-left',
          containerStyle: {
            width: '340px',
            height: '130px',
          }
        })
      }
    }
    catch (error) {
      
    }
  }

  return (
    <>
      <Header />
      <StyledContainer>
        <LoginDiv>
          <TittleText>
            <Text m={2}><BiLogIn /></Text>Iniciar Sesi&oacute;n
          </TittleText>
          <hr />
          <form onSubmit={(event) => handleSubmit(event)}>
            <FormContainer>
              <StyledFormControl isRequired >
                <FormLabel htmlFor='email'>Correo electr&oacute;nico</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none' children={<MdOutlineEmail color='gray' />} />
                  <Input background='#e5e5e5' focusBorderColor='#830370' name='email' id='email' type='email' placeholder='Ingrese su correo electr&oacute;nico' />
                </InputGroup>
              </StyledFormControl>
              <StyledFormControl isRequired >
                <FormLabel htmlFor='password'>Contrase&ntilde;a</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none' children={<RiLockPasswordLine color='gray' />} />
                  <Input background='#e5e5e5' focusBorderColor='#830370' name='password' id='password' type={show ? 'text' : 'password'} placeholder='Ingrese su contrase&ntilde;a' />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                      {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </StyledFormControl>
              <Link to='/'><Text fontWeight='semibold'>&iquest;Olvidaste tu contrase&ntilde;a?</Text></Link>
              <InlineText>&iquest;No ten&eacute;s una cuenta?<Link to='/signup'><Text color='#830370' fontWeight='bold'>&nbsp;Registrate</Text></Link></InlineText>
              <LoginDivButton h='50px' bg='white' _hover={{ bg: '#791e86', border: '1px solid black', color: 'white' }} type='submit'>
                Iniciar sesi&oacute;n
              </LoginDivButton>
            </FormContainer>
          </form>
        </LoginDiv>
      </StyledContainer>
      <Footer />
    </>
  )
}

export default Login