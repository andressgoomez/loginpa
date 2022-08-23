import styled from 'styled-components'

export const Header = styled.header`
	height: 185px;
	min-width: 350px;
	background-image: url('/fondoHeader.jpg');
	background-size: cover;
	background-repeat: no-repeat top left;
	padding: 4px;
	@media (max-width: 1000px) {
		height: 250px;
	}
`
