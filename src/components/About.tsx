import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import Form from './Form';
import { Link } from 'gatsby';
import { MdEmail } from "@react-icons/all-files/Md/MdEmail";
import { ImPhone } from "@react-icons/all-files/Im/ImPhone";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { IoLogoInstagram } from "@react-icons/all-files/io/IoLogoInstagram";
import { MdKeyboardArrowRight } from "@react-icons/all-files/Md/MdKeyboardArrowRight";


const AboutBox = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 24px 85px;
	margin: 0 auto;
	background-color: #202020;
	color: white;
`;

const StyledForm = styled(Form)`
	width: 40%;
`;

const StyledContent = styled.div`
	width: 20%;
	font-family: Rubik;
	font-weight: 200;
	
	h3 {
		text-transform: uppercase;
		margin-top: 29px;
		margin-bottom: 25px;
		font-size: 15px;
		font-weight: 200;
		color: #c9c9c9;
	}
	
	p {
		color: #7d7d7d;
		font-size: 15px;
		font-weight: 200;
		margin: 9px 0;

		&:nth-of-type(3) {
			margin-bottom: 5px;
		}
		&:nth-of-type(4) {
			margin-top: 0;
		}
	}

	a {
		color: #7d7d7d;
		font-size: 15px;
		font-weight: 200;
		text-decoration: none;

		&:hover {
			color: #c9c9c9;
			text-decoration: underline;
		}
	}
`;

const StyledMdEmail = styled(MdEmail)`
font-size: 16px;
transform: translateY(20%);
margin-right: 8px;
`;

const StyledImPhone = styled(ImPhone)`
font-size: 16px;
transform: translateY(20%);
margin-right: 8px;
`;

const StyledIoLogoFacebook = styled(FaFacebook)`
	font-size: 32px;
	transform: translateY(-38%);

	&:hover {
		color: #c9c9c9;
	}
`;

const StyledIoLogoInstagram = styled(IoLogoInstagram)`
	font-size: 45px;
	transform: translateY(-10%);
	margin-left: 10px;

	&:hover {
		color: #c9c9c9;
	}
`;

const StyledLink = styled(Link)`
	p {
		display: flex;
		flex-direction: row;
		&:hover {
			color: #c9c9c9;
			text-decoration: underline;
		}
	}
`;

const StyledMdKeyboardArrowRight = styled(MdKeyboardArrowRight)`
	transform: translateY(10%);
`;

export interface AboutProps {}
 
const About: React.SFC<AboutProps> = () => {
  return ( 
	  <AboutBox>
		 <StyledContent>
			 <h3>siedziba:</h3>
			 <p>ul. Rezedowa 60</p>
			 <p>54-515 Wrocław</p>
			 <p>Polska</p>
			 <p><a href="mailto:r.g.kowalczyk@gmail.com"><StyledMdEmail/>r.g.kowalczyk@gmail.com</a></p>
			 <p><a href="tel:601989908"><StyledImPhone/>+48 601 989 908</a></p>
		 </StyledContent>
		 <StyledContent>
			 <h3>znajdź nas:</h3>
			 <a href="https://www.facebook.com/GerrisUSV"><StyledIoLogoFacebook/></a>
			 <a href="https://www.instagram.com/gerris_usv/"><StyledIoLogoInstagram/></a>
		 </StyledContent>
		 <StyledContent>
			 <h3>mapa strony:</h3>
			 <StyledLink to="/"><p><StyledMdKeyboardArrowRight/> Strona Główna</p></StyledLink>
			 <StyledLink to="/articles"><p><StyledMdKeyboardArrowRight/> Artykuły</p></StyledLink>
			 <StyledLink to="//gerris-asv"><p><StyledMdKeyboardArrowRight/> Gerris ASV</p></StyledLink>
			 <StyledLink to="/gerris-asv-surveyor"><p><StyledMdKeyboardArrowRight/> Gerris ASV Surveyor</p></StyledLink>
			 <StyledLink to="/gerris-1100-asv"><p><StyledMdKeyboardArrowRight/> Gerris 1100 ASV</p></StyledLink>
			 <StyledLink to="/contact"><p><StyledMdKeyboardArrowRight/> Kontakt</p></StyledLink>
		 </StyledContent>


			<StyledForm/>
	  </AboutBox>
   );
}
 
export default About;