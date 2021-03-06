import * as React from "react";
import Email from '../components/Email';
import styled from 'styled-components'
import Title from "../components/Title";
import { ImPhone } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { mapStateToProps } from ".";
import { connect } from "react-redux";

const StyledContactBox = styled.div`
	display: flex;
	margin: 50px 0;
	justify-content: space-evenly;

	@media (max-width: 1300px) {
		flex-direction: column-reverse;
	}
`;

const StyledContact = styled.div`
    display: flex;
	flex-direction: column;
`;

const StyledCompany = styled.div`
	width: 240px;
	font-family: Rubik;
	font-weight: 200;
	
	h3 {
		text-transform: uppercase;
		margin-top: 29px;
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 200;
		color: #202020;

		&:nth-of-type(2) {
			margin-top: 50px;
			margin-bottom: 20px;
		}

	}
	
	p {
		color: #7d7d7d;
		font-size: 18px;
		font-weight: 200;
		margin: 9px 0;


		&:nth-of-type(4) {
			margin-bottom: 5px;

		}
		&:nth-of-type(5) {
			margin-top: 0;
		}
	}

	a {
		color: #7d7d7d;
		font-size: 18px;
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
		margin-top: 50px;
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 200;
		color: #202020;
	}
	
	p {
		color: #7d7d7d;
		font-size: 20px;
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
		font-size: 18px;
		font-weight: 200;
		text-decoration: none;

		&:hover {
			color: #c9c9c9;
			text-decoration: underline;
		}
	}
`;

const StyledImPhone = styled(ImPhone)`
	font-size: 17px;
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

const StyledCompanyInfo = styled.div`
	h3 {
		text-transform: uppercase;
		margin-top: 29px;
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 200;
		color: #202020;
	}
	
	p {
		color: #7d7d7d;
		font-size: 18px;
		font-weight: 200;
		margin: 12px 0;

		&:nth-of-type(4) {
			margin-top: 40px;
			margin-bottom: 3px;
			font-size: 18px;
		}
		&:nth-of-type(5) {
			margin-top: 0;
			margin-bottom: 3px;
			font-size: 18px;
		}
		&:nth-of-type(6) {
			margin-top: 0;
			font-size: 18px;
		}


	}

`;

export interface ContactPageProps {
	isEnglish: boolean;
}
 
const ContactPage: React.SFC<ContactPageProps> = ({isEnglish}) => {
  return ( 
    <>
     	<Title>{isEnglish ? "Contact" : "Kontakt"}</Title>
		 	<StyledContactBox>
				 
				<StyledContact>
					<StyledCompany>
						<h3>{isEnglish ? "headquters" : "siedziba"}:</h3>
						<p>{isEnglish ? "st. Rezedowa 60" : "ul. Rezedowa 60"}</p>
						<p>{isEnglish ? "54-515 Wroclaw" : "54-515 Wroc??aw"}</p>
						<p>{isEnglish ? "Poland" : "Polska"}</p>
						<h3>{isEnglish ? "CONTACT" : "KONTAKT"}:</h3>
						<p><a href="tel:601989908"><StyledImPhone/>+48 601 989 908</a></p>
					</StyledCompany>
					<StyledMedia>
						<h3>{isEnglish ? "find us" : "znajd?? nas"}:</h3>
						<a href="https://www.facebook.com/GerrisUSV"><StyledIoLogoFacebook/></a>
						<a href="https://www.instagram.com/gerris_usv/"><StyledIoLogoInstagram/></a>
					</StyledMedia>
				</StyledContact>
				
					<StyledCompanyInfo>
						<h3>{isEnglish ? "info" : "dane"}:</h3>
						<p>KRS: 0000862246</p>
						<p>NIP: 8943159066</p>
						<p>Regon: 38712781200000</p>
						<p>S??d Rejonowy dla Wroc??awia-Fabrycznej</p>
						<p>VI Wydzia?? Gospodarczy Krajowego</p>
						<p>Rejestru S??dowego</p>
					</StyledCompanyInfo>
				<Email/>

			</StyledContactBox>
    </>
   );
}
export default connect(mapStateToProps)(ContactPage);