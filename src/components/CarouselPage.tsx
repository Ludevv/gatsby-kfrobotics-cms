import React from "react";
import styled from 'styled-components'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import { Link } from "gatsby";


const StyledMDBContainer = styled(MDBContainer)`
margin-bottom: 170px;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
 padding: 0;
 width: 80%;
`;


const StyledMDBCarouselCaption = styled(MDBCarouselCaption)`
  background-color: #f3f3f3;
  position: static;

`;

const StyledName = styled.span`
  	font-family: "Audiowide";
	  font-size: 38px;
    color: black;
`;

const StyledDescription = styled.p`
	  font-size: 20px;
    color: black;
`;

const CarouselPage = () => {
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
              src="https://i.ibb.co/YXt1K9S/carusel1.jpg"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <StyledMDBCarouselCaption>
            <h3 className="h3-responsive"><Link to="/gerris-asv" ><StyledName>GERRIS ASV</StyledName></Link></h3>
            <StyledDescription>Uniwersalny bezzałogowy katamaran z funkcją autopilota.</StyledDescription>
          </StyledMDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/mqFsybJ/carusel2.jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <StyledMDBCarouselCaption>
            <h3 className="h3-responsive"><Link to="/gerris-1100-asv" ><StyledName>GERRIS 1100 ASV</StyledName></Link></h3>
            <StyledDescription>Nowoczesny bezzałogowy katamaran z funkcją autopilota.</StyledDescription>
          </StyledMDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/9GQXczr/carusel3.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <StyledMDBCarouselCaption>
            <h3 className="h3-responsive"><Link to="/gerris-asv-surveyor" ><StyledName>GERRIS ASV Surveyor</StyledName></Link></h3>
            <StyledDescription>Zintegrowany system do pomiarów batymetrycznych.</StyledDescription>
          </StyledMDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </StyledMDBContainer>
  );
}

export default CarouselPage;