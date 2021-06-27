import * as React from 'react';
import styled from 'styled-components';


import { Link } from 'gatsby';
import { ImPhone } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";


const AboutBox = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 24px 85px 35px;
	margin: 0 auto;
	background-color: #202020;
	color: white;

	@media(max-width: 980px) {
		flex-direction: column;
		padding: 15px 20px 25px;
	}
`;



const StyledCompany = styled.div`
	width: 240px;
	font-family: Rubik;
	font-weight: 200;
	
	h3 {
		text-transform: uppercase;
		margin-top: 29px;
		margin-bottom: 25px;
		font-size: 15px;
		font-weight: 200;
		color: #c9c9c9;

		@media(max-width: 980px) {
			margin-top: 5px;
			margin-bottom: 10px;
		}
	}
	
	p {
		color: #7d7d7d;
		font-size: 15px;
		font-weight: 200;
		margin: 9px 0;


		&:nth-of-type(4) {
			margin-top: 40px;
			margin-bottom: 5px;

			@media(max-width: 980px) {
				margin-top: 25px;
				margin-bottom: 5px;
			}
		}
		&:nth-of-type(5) {
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

const StyledMedia = styled.div`
	width: 180px;
	font-family: Rubik;
	font-weight: 200;
	
	h3 {
		text-transform: uppercase;
		margin-top: 29px;
		margin-bottom: 25px;
		font-size: 15px;
		font-weight: 200;
		color: #c9c9c9;

		@media(max-width: 980px) {
			margin-top: 25px;
			margin-bottom: 12px;
		}
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
const StyledSiteMap = styled.div`
	width: 210px;
	font-family: Rubik;
	font-weight: 200;
	
	h3 {
		text-transform: uppercase;
		margin-top: 29px;
		margin-bottom: 25px;
		font-size: 15px;
		font-weight: 200;
		color: #c9c9c9;

		
		@media(max-width: 980px) {
			margin-top: 15px;
			margin-bottom: 10px;
		}
	}
	
	p {
		display: inline-block;
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

const StyledLogo = styled.div`
	width: 330px;

	@media(max-width: 980px) {
		margin-top: 10px;
			width: 100%;
	}

	h1 {
		display: flex;
		margin: 0 0 0 15px;
		font-family: "Audiowide";
		font-size: 36px;
		line-height: 70px;
		color: #c9c9c9;

		@media(max-width: 980px) {
			font-size: 27px;
			margin: 0;
		}
	}
`;

const StyledCircle = styled.div`
	display: inline-block;
	height: 36px;
	width: 36px;
	margin-top: 17px;
	margin-right: 15px;
	border-radius: 50%;
	background-color: gold;
`;


const StyledImPhone = styled(ImPhone)`
font-size: 16px;
transform: translateY(20%);
margin-right: 8px;
`;

const StyledIoLogoFacebook = styled(FaFacebook)`
	font-size: 32px;

	&:hover {
		color: #c9c9c9;
	}
`;

const StyledIoLogoInstagram = styled(IoLogoInstagram)`
	font-size: 45px;
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

const FooterBox = styled.div`
  width: 100%;
  background-color: #202020;
  text-align: center;
  font-size: 13px;
  color: #c9c9c9;
  span {
    display: block;
    border-top: 2px solid #7d7d7d;
    margin: 0 20px;
    line-height: 35px;
  }

  @media (max-width: 430px) {
    font-size: 12px;
    span {
      margin: 0 20px;
    }
    
  }
  @media (max-width: 380px) {
    font-size: 10px;
  }
  @media (max-width: 350px) {
    font-size: 9px;
  }
  @media (max-width: 320px) {
    font-size: 9px;
  }
`;


export interface FooterProps {}
 
const Footer: React.SFC<FooterProps> = () => {

  const year = new Date().getFullYear();

  return ( 
    <>
      <AboutBox>
		 <StyledCompany>
			 <h3>siedziba:</h3>
			 <p>ul. Rezedowa 60</p>
			 <p>54-515 Wrocław</p>
			 <p>Polska</p>
			 <p>Numer telefonu:</p>
			 <p><a href="tel:601989908"><StyledImPhone/>+48 601 989 908</a></p>
		 </StyledCompany>
		 <StyledMedia>
			 <h3>znajdź nas:</h3>
			 <a href="https://www.facebook.com/GerrisUSV"><StyledIoLogoFacebook/></a>
			 <a href="https://www.instagram.com/gerris_usv/"><StyledIoLogoInstagram/></a>
		 </StyledMedia>
		 <StyledSiteMap>
			 <h3>na skróty:</h3>
			 <StyledLink to="/"><p><StyledMdKeyboardArrowRight/> Strona Główna</p></StyledLink>
			 <StyledLink to="/articles"><p><StyledMdKeyboardArrowRight/> Artykuły</p></StyledLink>
			 <StyledLink to="/gerris-asv"><p><StyledMdKeyboardArrowRight/> Gerris ASV</p></StyledLink>
			 <StyledLink to="/gerris-asv-surveyor"><p><StyledMdKeyboardArrowRight/> Gerris ASV Surveyor</p></StyledLink>
			 <StyledLink to="/gerris-1100-asv"><p><StyledMdKeyboardArrowRight/> Gerris 1100 ASV</p></StyledLink>
			 <StyledLink to="/contact"><p><StyledMdKeyboardArrowRight/> Kontakt</p></StyledLink>
		 </StyledSiteMap>
		 <StyledLogo><h1><StyledCircle/>K.F.&nbsp;Robotics</h1></StyledLogo>


			
	  </AboutBox>
    <FooterBox>
        <span>© 2020 - {year} K.F. Robotics Sp. z o.o. Wszelkie Prawa Zastrzeżone</span>
    </FooterBox>
    </>
   );
}
 
export default Footer;