import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

export interface HeaderProps {}


const StyledMain = styled.main`
	height: 80vh;
    display: flex;
	flex-direction: row-reverse;
    justify-content: center;
    margin: 100px 0;

	@media (max-width: 1235px) {
		height: auto;
		flex-direction: column;
		margin: 0;
	}

`;
const StyledName = styled.h1`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 50px 0 0 0;
    font-family: "Audiowide";
    font-size: 85px;

	@media (max-width: 1235px) {
		font-size: 65px;
		text-align: center;
		margin: 0;
		
	}
	@media (max-width: 550px) {
		margin-top:  35px;
		font-size: 45px;	
	}

	b {
		font-weight: 700;
	}
	
	p {
		width: 50%;
		font-size: 20px;
		color: #000;
		font-family: Roboto;
		line-height: 1.7;
		font-weight: 200;
		margin: 45px 0 60px;

			
		@media (max-width: 1235px) {
			width: 100%;
			text-align: left;
		}
	}

	
	@media (max-width: 1235px) {
		width: 100%;
	}

`;

const StyledLink = styled(Link)`
	background-color: gold;
	border: 2px solid gold;
	color: white;
	padding: 13px 40px;
	border-radius: 5px;
	box-shadow: rgba(255, 196, 0, 0.418) 0px 2px 8px 0px;
	font-family: Rubik;
	font-size: 20px;
	font-weight: 200;
	text-decoration: none;
	letter-spacing: 2px;

	&:hover {
		background-color: white;
		color: gold;
	}

	@media (max-width: 500px) {
		width: 100%;
		margin: 0 auto 50px;
	}
`;
 
const Header: React.SFC<HeaderProps> = ({children}) => {

  return ( 

	<StyledMain>
			<StaticImage
			src="../images/render.png"
			width={800}
			alt="render"
			placeholder="tracedSVG"
			quality={100}
			objectFit="contain"
      objectPosition="50% 0%"
		/>
		<StyledName>
			K.F. Robotics
			<p>Projektujemy i wykonujemy <b>dedykowane</b> rozwiązania inżynierskie, kompleksowo obsługując zlecenia naszych Klientów.</p>
			<StyledLink to="/contact">ZAMÓW</StyledLink>
		</StyledName>
	
	</StyledMain>

   );
}
 
export default Header;