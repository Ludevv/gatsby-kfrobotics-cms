import * as React from 'react';
import styled from 'styled-components';

export interface TitleProps {}

const StyledBox = styled.div`
    position: relative;
    width: 80px;
    height: 70px;
    margin: 40px 0 0;
    background-color: gold;
    white-space: nowrap;
	border-radius: 10px 0 0 10px;
`;

const StyledTriangle = styled.div`
	position: absolute;
	right: -30px;
    width: 0;
    height: 0;
    border-bottom: 70px solid gold;
    border-right: 30px solid transparent;
`;

const StyledText = styled.p`
    position: absolute;
    top: 2px;
    left: 17px;
    font-size: 45px;
    color: black;
    font-family: Audiowide;
    margin: 0;
`;

 
const Title: React.SFC<TitleProps> = ({children}) => {

  return ( 
      <StyledBox>
        <StyledTriangle/>
        <StyledText>{children}</StyledText>
      </StyledBox>
   );
}
 
export default Title;