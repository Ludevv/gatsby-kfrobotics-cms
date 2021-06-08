import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

export interface HeaderProps {}


const StyledMain = styled.main`

    display: flex;
    justify-content: center;
    margin: 150px 0 250px;
`;
const StyledName = styled.h1`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 50px 0 0 0;
    font-family: "Audiowide";
    font-size: 85px;
	
  p {
    width: 50%;
    font-size: 20px;
    color: #000;
    font-family: Roboto;
    line-height: 1.7;
    font-weight: 200;
    margin: 45px 0 60px;
  }

`;

const StyledLink = styled(Link)`
	background-color: gold;
	border: 2px solid gold;
	color: white;
	padding: 10px 40px;
	border-radius: 5px;
	box-shadow: rgba(255, 196, 0, 0.418) 0px 2px 8px 0px;
	font-family: Rubik;
	font-size: 18px;
	font-weight: 200;
	text-decoration: none;
`;
 
const Header: React.SFC<HeaderProps> = ({children}) => {

  return ( 

		<StyledMain>
		<StyledName>
			K.F. Robotics
			<p>Projektujemy i wykonujemy <b>dedykowane</b> rozwiązania inżynierskie, kompleksowo obsługując zlecenia naszych Klientów.</p>
			<StyledLink to="/contact">ZAMÓW</StyledLink>
		</StyledName>
		<StaticImage
			src="../images/render.png"
			width={600}
			alt="render"
			placeholder="tracedSVG"
			quality={100}
		/>
		</StyledMain>

   );
}
 
export default Header;