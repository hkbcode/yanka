import React from "react"
import styled from 'styled-components'


const Container = styled.div`

	width: 500px;
	height: 100px;
	background-color: #eeee;
	margin: 0 auto;
	border-radius: 20px;
`

const Title = styled.h1`

	font-size:25px;
	font-weight: 100;
	font-family:verdana;
	text-align:center;
	padding: 10px;
	text-transform: capitalize;
`


const IndexPage = () =>{
	return(
		
			<Container>
			<Title>
				Gatsbyjs with styled-components
			</Title>
			</Container>

		)
}



export default IndexPage