import styled from 'styled-components'
import { GridItem, Image, Button, Text, FormControl } from '@chakra-ui/react'

export const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 1000px) {
		display: grid;
		grid-template-columns: repeat(1, 300px);
		justify-content: center;
	}
`

export const Logo = styled(Image)`
	min-width: 150px;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
	}
`
export const LoginSignUpButtons = styled(GridItem)`
	display: flex;
	justify-content: end;
	align-self: flex-end;
	margin-bottom: 5px;
`
export const LoginButton = styled(Button)`
	margin: 10px;
	border: 1px solid black;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
		rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
	}
`
export const SignUpButton = styled(Button)`
	border: 1px solid black;
	margin: 10px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
		rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
	}
`

export const StyledFooter = styled.footer`
	height: 35px;
	min-width: 350px;
	background-image: url('/fondoHeader.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	color: white;
	font-weight: bold;
	display: flex;
	justify-content: center;
`
export const StyledFooterLink = styled.a`
	text-decoration: none;
	margin-left: 5px;
`

export const StyledContainer = styled.div`
	height: calc(100vh - 220px);
	min-height: 450px;
	min-width: 350px;
	background-color: var(--violet-3);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (max-width: 1000px) {
		height: 850px;
	}
`

export const LoginDiv = styled.div`
	height: 450px;
	width: 485px;
	background-color: white;
	border: 1px solid var(--violet-2);
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	@media (max-width: 1000px) {
		width: 450px;
		height: 500px;
	}
	@media (max-width: 500px) {
		width: 350px;
	}
`
export const TittleText = styled(Text)`
	font-size: 26px;
	font-weight: bold;
	margin-top: 10px;
	margin-bottom: 10px;
	font-style: italic;
	display: flex;
	justify-content: center;
`
export const InlineText = styled(Text)`
	display: flex;
	justify-content: center;
`
export const FormContainer = styled.div`
	padding: 35px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const FormContainerSignup = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const StyledFormControl = styled(FormControl)`
	margin-bottom: 25px;
`
export const LoginDivButton = styled(Button)`
	margin-top: 25px;
	background-color: white;
	border: 1px solid var(--violet-1);
	color: var(--violet-1);
`

export const SignupDiv = styled.div`
	height: 460px;
	width: 950px;
	min-width: 350px;
	background-color: white;
	border: 1px solid var(--violet-2);
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	@media (max-width: 1000px) {
		width: 450px;
		height: 780px;
	}
	@media (max-width: 550px) {
		width: 350px;
	}
`
export const SignupDivButton = styled(Button)`
	margin-top: 15px;
	background-color: white;
	border: 1px solid var(--violet-1);
	color: var(--violet-1);
`

export const GridSignup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 380px);
	grid-column-gap: 40px;
	grid-row-gap: 20px;
	justify-content: center;
	align-items: center;

	@media (max-width: 1000px) {
		display: grid;
		grid-template-columns: repeat(1, 280px);
	}
`
