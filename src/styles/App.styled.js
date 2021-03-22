import styled from "styled-components"

export const BACKGROUND = styled.div`
	position: relative;
	height: 100vh; /* You must set a specified height */
	filter: brightness(0.4);
	background-color: #cccccc; /* Used if the image is unavailable */
	background-position: center center; //Center the image
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: cover; /* Resize the background image to cover the entire container */
	background-attachment: fixed;
	width: 100%;
`

export const DATACONTAINER = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
`