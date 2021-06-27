import * as React from 'react';
import styled, { keyframes } from 'styled-components'
import Title from './Title'



export interface GerrisProps {
    title: string;
    text1: string;
    text2: string;
    text3: string;
    imgSrc1: any;
    imgSrc2: any;
    imgSrc3: any;
}

export interface ImageProps {
  path: string;
}

const float = keyframes`
  from {
    transform: translate(-50%, -57%);
  }

  to {
    transform: translate(-50%, -43%);
  }
`;


const StyledBoxOdd = styled.div`
    display: flex;
    margin: 70px 0;
    justify-content: center;

    @media (max-width: 760px) {
		flex-direction: column-reverse;	
	}
`;

const StyledTextOdd = styled.p`
    display: flex;
    align-items: center;
    width: 70%;
    font-size: 20px;
    font-family: Roboto;
    padding-right: 120px;
    line-height: 1.8;

    @media (max-width: 760px) {
		width: 100%;
        padding-right: 0;
        margin: 30px 0 0;
	}
`;

const StyledBackgroundOdd = styled.div`
    position: relative;
    width: 450px;
    height: 350px;
    background-image: url(${(props: ImageProps) => props.path});
    background-position: center;
    background-size: cover;
	background-repeat: no-repeat;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (max-width: 760px) {
		width: 100%;
	}

   &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    width: 100%;
    z-index: 1;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px)
   }
`;
const StyledImageOdd = styled.div`
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 380px;
    height: 280px;
    background-image: url(${(props: ImageProps) => props.path});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: ${float} 10s linear infinite alternate;

    @media (max-width: 760px) {
		left: 50%;
	}
    @media (max-width: 520px) {
		width: 90%;
	}
`;
const StyledBoxEven = styled.div`
    display: flex;
    margin-bottom: 70px;
    justify-content: center;

    @media (max-width: 760px) {
		flex-direction: column;	
	}
`;

const StyledTextEven = styled.p`
    display: flex;
    align-items: center;
    width: 70%;
    font-size: 20px;
    font-family: Roboto;
    padding-left: 120px;
    line-height: 1.8;

    @media (max-width: 760px) {
		width: 100%;
        padding-left: 0;
        margin-top: 30px;
	}
`;

const StyledBackgroundEven = styled.div`
    position: relative;
    width: 450px;
    height: 350px;
    background-image: url(${(props: ImageProps) => props.path});
    background-position: center;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-repeat: no-repeat;

    @media (max-width: 760px) {
		width: 100%;
	}

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        height: 100%;
        width: 100%;
        z-index: 1;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px)
   }
`;
const StyledImageEven = styled.div`
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 380px;
    height: 280px;
    background-image: url(${(props: ImageProps) => props.path});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: ${float} 10s linear infinite alternate;

    @media (max-width: 760px) {
		left: 50%;
	}
    @media (max-width: 520px) {
		width: 90%;
	}
`;
 
const Gerris: React.SFC<GerrisProps> = ({title, text1, text2, text3, imgSrc1, imgSrc2, imgSrc3}) => {
    return ( 
        <>
            <Title>{title}</Title>
            <StyledBoxOdd>
                <StyledTextOdd>{text1}</StyledTextOdd>
                <StyledBackgroundOdd path={imgSrc1}>
                    <StyledImageOdd path={imgSrc1}/>
                </StyledBackgroundOdd>
            </StyledBoxOdd>

            <StyledBoxEven>
                <StyledBackgroundEven path={imgSrc2}>
                    <StyledImageEven path={imgSrc2}/>
                </StyledBackgroundEven>
                <StyledTextEven>{text2}</StyledTextEven>
            </StyledBoxEven>

            <StyledBoxOdd>
                <StyledTextOdd>{text3}</StyledTextOdd>
               <StyledBackgroundOdd path={imgSrc3}>
                    <StyledImageOdd path={imgSrc3}/>
                </StyledBackgroundOdd>
            </StyledBoxOdd>
        </>
     );
}
 
export default Gerris;