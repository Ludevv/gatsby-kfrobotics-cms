import { Link } from 'gatsby';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import cookie from '../images/cookie.png';

type CookiesProps = {
    isEnglish: boolean;
}


const StyledWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
    height: 100px;
    padding: 10px 50px;
    width: 100vw;
    background-color: #000000b9;
    z-index: 20;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    @media (max-width: 715px) {
		flex-direction: column;
        height: 150px;
        padding: 5px 10px;
	}
`;

const StyledP = styled.p`
    color: #fff;
    font-family: Roboto;
    line-height: 1.2;
    margin: 0;
    @media (max-width: 715px) {
		text-align: justify;
	}
`;

const StyledLink = styled(Link)`
    color: gold;

    &:hover {
        color: #ffe760;
    }
`;

const StyledImg = styled.img`
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 30px;

    @media (max-width: 715px) {
		display: none;
	}
`;

const StyledButton = styled.button`
	display: inline-block;
	background-color: transparent;
	border: 2px solid gold;
	color: gold;
	margin-left: 35px;
	padding: 10px 40px;
	border-radius: 5px;
	box-shadow: rgba(255, 196, 0, 0.418) 0px 2px 8px 0px;
	font-family: Rubik;
	font-size: 18px;
    transition: all 1s;

    &:hover {
        background-color: #000;
    }

    @media (max-width: 715px) {
		margin-left: 0px;
        padding: 5px 20px;
        margin-top: 15px;
	}
`;

const mapStateToProps = (state) => {
	const { isEnglish } = state;
	return { isEnglish } 
}

const Cookies: React.FC<CookiesProps> = ({isEnglish}) => {

    const [showCookies, setShowCookies] = React.useState(undefined);
    const cookiesAccept = () => {
        if(window) {
            localStorage.setItem('Cookies', 'true');
            setShowCookies(localStorage.getItem('Cookies'))
        }
    }

    React.useEffect(()=> {
        setShowCookies(localStorage.getItem('Cookies'))
    },[])

    return ( 
        <>
        {showCookies !== "true" 
        ? 
        <StyledWrapper>
            <StyledImg src={cookie} alt="ciasteczko"/>
            <StyledP>
                {isEnglish ? <>This website uses cookies. If you apply on this site, for accepting the<StyledLink to="/privacy-policy">privacy and cookie policy</StyledLink>.</> : <> Ta strona używa plików Cookies. Jeśli będziesz kontynuować przeglądanie tej witryny, założymy, że akceptujesz <StyledLink to="/privacy-policy">politykę prywatności i cookies</StyledLink>.</>}
               
            </StyledP>
            <StyledButton onClick={() => cookiesAccept()}>{isEnglish ? <>Accept</> : <>Tak,&nbsp;akceptuję</>}</StyledButton>

        </StyledWrapper>
        : null}
        </>
     );
}
 
export default connect(mapStateToProps)(Cookies);