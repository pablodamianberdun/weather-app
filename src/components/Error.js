import React from 'react'
import { ERROR } from "../styles/error.styled"

const Error = ({ message}) => {
	return ( 
		<ERROR>{message}</ERROR>
	 );
}
 
export default Error;