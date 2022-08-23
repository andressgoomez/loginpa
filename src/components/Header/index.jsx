import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
	Logo,
	LoginSignUpButtons,
	LoginButton,
	SignUpButton,
	StyledGrid,
} from '../styles'
import { Spacer, Center } from '@chakra-ui/react'
import { FaUserPlus, FaUserCheck, FaSignOutAlt } from 'react-icons/fa'
import { Header } from './styles'

const HeaderComponent = () => {
	const location = useLocation()

	return (
		<Header>
			<StyledGrid>
				<Spacer />
				<Center>
					{location.pathname === '/logged' ? (
						<Logo src="/PAlogo.png" alt="Pulpo Army Logo" w={250} />
					) : (
						<Link to="/">
							<Logo src="/PAlogo.png" alt="Pulpo Army Logo" w={250} />
						</Link>
					)}
				</Center>

				{location.pathname !== '/logged' ? (
					<LoginSignUpButtons>
						<Link to="/">
							<LoginButton
								fontSize="smaller"
								colorScheme="whiteAlpha"
								_hover={{ bg: '#9518a5', border: '1px solid white' }}
								leftIcon={<FaUserCheck />}
							>
								Iniciar Sesi&oacute;n
							</LoginButton>
						</Link>
						<Link to="/signup">
							<SignUpButton
								fontSize="smaller"
								colorScheme="whiteAlpha"
								_hover={{ bg: '#9518a5', border: '1px solid white' }}
								leftIcon={<FaUserPlus />}
							>
								Registrarse
							</SignUpButton>
						</Link>
					</LoginSignUpButtons>
				) : (
					<LoginSignUpButtons>
						<Link to="/">
							<LoginButton
								colorScheme="whiteAlpha"
								_hover={{ bg: '#9518a5', border: '1px solid white' }}
								leftIcon={<FaSignOutAlt />}
							>
								Cerrar Sesi&oacute;n
							</LoginButton>
						</Link>
					</LoginSignUpButtons>
				)}
			</StyledGrid>
		</Header>
	)
}

export default HeaderComponent
