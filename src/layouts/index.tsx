import * as React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { GlobalStyle } from '../styles/globalStyles';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 85px;
`;

const MainLayout = ({children}) => (
  <>
    <GlobalStyle/>
    <Navigation/>
    <Wrapper>
        {children}
    </Wrapper>
    <About/>
    <Footer/>
  </>
)

export default MainLayout