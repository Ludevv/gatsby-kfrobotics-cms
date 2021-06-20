import * as React from "react";
import { Link } from 'gatsby';
import styled from "styled-components";
import { FaCaretDown } from "@react-icons/all-files/fa/FaCaretDown";
import { AiOutlineAlignRight } from "@react-icons/all-files/Ai/AiOutlineAlignRight";
import { useEffect, useState } from "react";


export interface NavProps {
  background: Boolean;
}

const StyledNavigationBar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	height: 80px;
	width: 100%;
	display: flex;
	flex-grow: 0;
	justify-content: space-between;
	background-color: ${(props: NavProps) => props.background ? "gold" : "rgba(255, 255, 255, 0.7)"};
 	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	z-index: 10;
`;

const StyledLink = styled(props => <Link {...props} />)`
	color: #000;
	text-decoration: none;
	text-transform: uppercase;
`;

const StyledBoxLogo = styled.div`
	display: flex;
	margin-left: 85px;
	margin-top: 0;

	@media (max-width: 1235px) {
		margin-left: 35px;
  	}
	@media (max-width: 500px) {
		margin-left: 10px;
  	}
`;

const StyledComapnyName = styled.h1`
	display: inline-block;
	margin: 0 0 0 15px;
	font-family: "Audiowide";
	font-size: 38px;
	line-height: 80px;

	@media (max-width: 500px) {
		font-size: 29px !important;
  	}
	@media (max-width: 374px) {
		font-size: 23px !important;
  	}
	@media (max-width: 330px) {
		display: none;
  	}
`;

const StyledButtons = styled.div`
	display: flex;
	align-items: center;
	margin-right: 85px;

	@media (max-width: 1235px) {
		display: none;
  }
`;

const StyledButton = styled.span`
	display: inline-block;
	margin-right: 25px;
	font-family: Rubik;
	font-size: 18px;

	&:hover {
		color: gold;
	}

	@media (max-width: 1235px) {
		display: block;
		text-align: center;
		margin: 0;
		padding-bottom: 35px;
		font-family: "Roboto";
		font-size: 35px;
		font-weight: 700;

		&:hover {
			color: black;
		}
  	}

	@media (max-width: 400px) {
		font-size: 25px;
	}
`;

const StyledDownButton = styled.span`
	position: relative;
	display: inline-block;
	margin-right: 30px;
	font-family: Rubik;
	font-size: 18px;
	cursor: pointer;

	span:hover{
		color: gold;
	}
`;

const StyledGerris = styled.div`
	position: absolute;
	top: 60px;
	right: 0;
	width: 170%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 10px 20px;
	border-radius: 8px;
	background-color: rgba(255, 255, 255, 0.7);
 	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	z-index: 10;

	a {
		line-height: 45px;
		&:hover {
			color: gold;
		}
	}
`;

const StyledOrderButton = styled.span`
	display: inline-block;
	background-color: white;
	border: 2px solid gold;
	color: gold;
	margin-left: 15px;
	padding: 10px 40px;
	border-radius: 5px;
	box-shadow: rgba(255, 196, 0, 0.418) 0px 2px 8px 0px;
	font-family: Rubik;
	font-size: 18px;
	letter-spacing: 2px;

	&:hover {
		color: white;
		background-color: gold;
	}

	@media (max-width: 1235px) {
		display: block;
		margin: 0 30%;
		text-align: center;
		color: black;
		background-color: white;
		border: solid black 4px;
		border-radius: 15px;
		font-size: 35px;
		font-weight: 700;
		font-family: "Roboto";
	}

	@media (max-width: 550px) {
		margin: 0 20px;
	}
	@media (max-width: 400px) {
		font-size: 25px;
	}
`;

const StyledFaCaretDown = styled(FaCaretDown)`
	transform: translateY(-15%);
`;

const StyledMobileMenu = styled(AiOutlineAlignRight)`
	margin-right: 20px;
	transform: translateY(50%);
	font-size: 40px;
	cursor: pointer;

	@media (min-width: 1235px) {
		display: none;
  	}
	@media (max-width: 500px) {
		margin-right: 10px;
  	}
`;

const StyledMobileNav = styled.div`
	position: fixed;
	top: 80px;
	height: 100vh;
	right: 0;
	left: 0;
	padding: 80px 0 0;
	background-color: gold;
	z-index: 10;

	@media (min-width: 1235px) {
		display: none;
  	}
`;

const StyledImage = styled.div`
	height: 40px;
	width: 40px;
	margin-top: 20px;
	border-radius: 50%;
	background-color: ${(props: NavProps) => props.background ? "black" : "gold"};
`;

export interface NavigationProps {}
 
const Navigation: React.SFC<NavigationProps> = () => {
	const [showGerris, setShowGerris] = useState<Boolean>(false);
	const [isMobile, setIsMobile] = useState<Boolean>(false);

	const handleShowOptions = () => {
		setShowGerris(state => !state);
	}

	const handleHideOptions = () => {
		setShowGerris(false);
	}

	const handleMobileMenu = () => {
		setIsMobile(state => !state)
	}

	const handleHideMobileMenu = () => {
		setIsMobile(false);
	}

	useEffect(()=>{
		function updateSize() {
			if(window.innerWidth > 1235) {
				setIsMobile(false);
			}
    	}
		window.addEventListener('resize', updateSize);
		updateSize();
	})

  return ( 
    <StyledNavigationBar background={isMobile}>
		<StyledLink to="/" onClick={handleHideOptions}>
			<StyledBoxLogo>
				<StyledImage background={isMobile}/>
			<StyledComapnyName>K.F. Robotics</StyledComapnyName>
			</StyledBoxLogo>
		</StyledLink>

		<StyledButtons>
			<StyledLink to="/" onClick={handleHideOptions}>
				<StyledButton>strona główna</StyledButton>
			</StyledLink>

			<StyledLink to="/articles" onClick={handleHideOptions}>
				<StyledButton>artykuły</StyledButton>
			</StyledLink>

			<StyledDownButton onClick={handleShowOptions}><span>DZIAŁALNOŚĆ <StyledFaCaretDown/></span>
				{showGerris && <StyledGerris>
					<StyledLink to="/gerris-asv" >gerris asv</StyledLink>
					<StyledLink to="/gerris-asv-surveyor" >gerris asv surveyor</StyledLink>
					<StyledLink to="/gerris-1100-asv" >gerris 1100 asv</StyledLink>
				</StyledGerris>}
			
			</StyledDownButton>

			<StyledLink to="/contact" onClick={handleHideOptions}>
				<StyledOrderButton>zamów</StyledOrderButton>
			</StyledLink>
		</StyledButtons>
		<StyledMobileMenu onClick={handleMobileMenu}/>

		{isMobile && <StyledMobileNav>
			<StyledLink to="/" onClick={handleHideMobileMenu}>
				<StyledButton>strona główna</StyledButton>
			</StyledLink>

			<StyledLink to="/articles" onClick={handleHideMobileMenu}>
				<StyledButton>artykuły</StyledButton>
			</StyledLink>	

			<StyledLink to="/gerris-asv" onClick={handleHideMobileMenu}>
				<StyledButton>gerris asv</StyledButton>
			</StyledLink>

			<StyledLink to="/gerris-asv-surveyor" onClick={handleHideMobileMenu}>
				<StyledButton>gerris asv surveyor</StyledButton>
			</StyledLink>

			<StyledLink to="/gerris-1100-asv" onClick={handleHideMobileMenu}>
				<StyledButton>gerris 1100 asv</StyledButton>
			</StyledLink>

			<StyledLink to="/contact" onClick={handleHideMobileMenu}>
				<StyledOrderButton>zamów</StyledOrderButton>
			</StyledLink>
		</StyledMobileNav>}
    </StyledNavigationBar>
   );
}

export default Navigation;