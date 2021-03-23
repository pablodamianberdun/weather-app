import styled from "styled-components"

export const ICON = styled.img`
	display: inline-block;
	width: 100px;
`

export const CITY = styled.h2`
	display: block;
	
	span{
		font-size: 25px;
	}
`

export const TEMP = styled.h1`
	font-size: 10vw;
	display: inline-block;
	margin: 0;

	@media(min-width: 768px){
		font-size: 5vw;
	}
`