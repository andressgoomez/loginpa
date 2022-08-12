import React from 'react'
import { StyledFooter, StyledFooterLink } from '../Styles.jsx'
import { Center } from '@chakra-ui/react'

const Footer = () => {
  return (
    <StyledFooter>
      <Center>
        2022&nbsp;&copy;
        <StyledFooterLink href='https://www.instagram.com/andressgoomez/' target='blank'>Andr&eacute;s Gomez</StyledFooterLink>
      </Center>
    </StyledFooter>
  )
}

export default Footer