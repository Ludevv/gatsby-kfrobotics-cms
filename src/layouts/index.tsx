import * as React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { GlobalStyle } from '../styles/globalStyles';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store';


const Wrapper = styled.div`
  margin: 0 140px;

  @media (max-width: 1650px) {
    margin: 0 120px;

  }

  @media (max-width: 1400px) {
    margin: 0 110px;

  }
  @media (max-width: 1235px) {
    margin: 0 90px;
  }
  @media (max-width: 1024px) {
    margin: 0 70px;

  }

  @media(max-width: 980px) {
    margin: 0 50px;
	}
  @media(max-width: 780px) {
    margin: 0 35px;
	}

  @media(max-width: 500px) {
    margin: 0 20px;
	}
`;

const MainLayout = ({children}) => (
  <Provider store={store}>
    <GlobalStyle/>
    <Navigation/>
    <Wrapper>
        {children}
    </Wrapper>
    <Footer/>
  </Provider>
)

export default MainLayout