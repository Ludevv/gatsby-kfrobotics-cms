import * as React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { GlobalStyle } from '../styles/globalStyles';
import styled from 'styled-components';


const Wrapper = styled.div`
  margin: 0 140px;

  @media (max-width: 1235px) {
    /* margin: 0 50px;
    background-color: red; */
  }
`;

const MainLayout = ({children}) => (
  <>
    <GlobalStyle/>
    <Navigation/>
    <Wrapper>
        {children}
    </Wrapper>
    <Footer/>
  </>
)

export default MainLayout