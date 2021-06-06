import * as React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  width: 100%;
  background-color: #202020;
  text-align: center;
  font-size: 13px;
  color: #c9c9c9;
  span {
    display: block;
    /* border-top: 2px solid #7d7d7d; */
    margin: 0 85px;
    line-height: 35px;
  }

  @media (max-width: 430px) {
    font-size: 12px;
  }
  @media (max-width: 380px) {
    font-size: 11px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
  }
  @media (max-width: 320px) {
    font-size: 8px;
  }
`;


export interface FooterProps {}
 
const Footer: React.SFC<FooterProps> = () => {

  const year = new Date().getFullYear();

  return ( 
    <FooterBox>
        <span>© 2020 - {year} K.F. Robotics Sp. z o.o. Wszelkie Prawa Zastrzeżone</span>
    </FooterBox>
   );
}
 
export default Footer;