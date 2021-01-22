import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div ` 
	display: block;
	width: 100%;
	text-align: center;
	color: white;
	padding: 10px;
	margin-top: 40px;
	position: absolute;
	bottom: 0;
`

function Footer() {
	return(
		<FooterContainer>
			<p>Weather App &copy;2021 Pablo Berdun</p>
		</FooterContainer>
	)
}

export default Footer