import React from "react";
import styled from 'styled-components'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import { Link } from "gatsby";
import carusel1 from '../images/carusel1.jpg';
import carusel2 from '../images/carusel2.jpg';
import carusel3 from '../images/carusel3.jpg';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	const { isEnglish } = state;
	return { isEnglish } 
}

const StyledMDBContainer = styled(MDBContainer)`
margin-bottom: 170px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 padding: 0;
 width: 80%;

   @media(max-width: 1000px) {
    width: 100%;
	}

  @media (max-width: 500px) {
    margin-bottom: 80px;
  }
`;


const StyledMDBCarouselCaption = styled(MDBCarouselCaption)`
  background-color: #f3f3f3;
  position: static;

`;

const StyledName = styled.span`
  	font-family: "Audiowide";
	  font-size: 38px;
    color: black;
    
    @media(max-width: 500px) {
      font-size: 23px;
    }
`;

const StyledDescription = styled.p`
	  font-size: 20px;
    color: black;

    @media(max-width: 500px) {
      font-size: 15px;
      margin-bottom: 0;
      padding-right: 5px;
      padding-left: 5px;
    }
`;

const CarouselPage = ({isEnglish}) => {
  return (
    <StyledMDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={false}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={carusel1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <StyledMDBCarouselCaption>
            <h3 className="h3-responsive"><Link to="/gerris-asv" ><StyledName>GERRIS ASV</StyledName></Link></h3>
            <StyledDescription>
                {isEnglish 
                ? 
                "A universal unmanned catamaran with an autopilot function." 
                : 
                "Uniwersalny bezza??ogowy katamaran z funkcj?? autopilota."}
            </StyledDescription>
          </StyledMDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={carusel2}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <StyledMDBCarouselCaption>
            <h3 className="h3-responsive"><Link to="/gerris-1100-asv" ><StyledName>GERRIS 1100 ASV</StyledName></Link></h3>
            <StyledDescription>
              {isEnglish 
              ? 
              "A modern unmanned catamaran with an autopilot function (under testing)." 
              : 
              "Nowoczesny bezza??ogowy katamaran z funkcj?? autopilota."}
            </StyledDescription>
          </StyledMDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={carusel3}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <StyledMDBCarouselCaption>
            <h3 className="h3-responsive"><Link to="/gerris-asv-surveyor" ><StyledName>GERRIS ASV Surveyor</StyledName></Link></h3>
            <StyledDescription>
              {isEnglish 
              ? 
              "Integrated system for bathymetric measurements." 
              : 
              "Zintegrowany system do pomiar??w batymetrycznych."}
            </StyledDescription>
          </StyledMDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </StyledMDBContainer>
  );
}

export default connect(mapStateToProps)(CarouselPage);