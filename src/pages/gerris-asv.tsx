import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import BoatInfo from "../components/BoatInfo";
import Gerris from "../components/Gerris";
import SetIncludes from "../components/SetIncludes";
import Table from "../components/Table";
import styled from 'styled-components';

export interface GerrisPageProps {}

export const StyledWrapImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
 
const GerrisPage: React.SFC<GerrisPageProps> = () => {
  return ( 
    <>
    <Gerris
        title={"Gerris ASV"}
        text1={ 
          "Gerris ASV to bezzałogowy katamaran z funkcją ręcznego i autonomicznego sterowania, stworzony z myślą o dokonywaniu pomiarów batymetrycznych przy wykorzystaniu montowanego na nim sprzętu. Zastosowane rozwiązania konstrukcyjne mają na celu ułatwienie obsługi, a wysokiej jakości podzespoły maksymalizację niezawodności. System uniwersalnego mocowania sprzętu pomiarowego pozwala w prosty sposób zamontować na katamaranie dowolny odbiornik GNSS i echosondę." 
          }

        text2={
          "Gerris ASV ze zintegrowanym autopilotem szybciej i dokładniej wykona za nas żmudne pomiary na dużych akwenach. Wystarczy w aplikacji zaznaczyć interesujący nas obszar, a dalej sterowaniem zajmie się autopilot płynąc precyzyjnie wzdłuż zadanej trasy."
         }

        text3={ 
          "Przetestowaliśmy Gerris’a w najróżniejszych warunkach pogodowych i terenowych, aby mieć pewność, że te czynniki nie będą stanowiły przeszkody do jego pracy. Niestraszne mu są niskie i wysokie temperatury, piasek, żwir, roślinność oraz deszcz. Kadłub wykonany z kompozytu epoksydowo-szklanego cechuje się wysoką odpornością na uderzenia. Katamaran został od podstaw zaprojektowany w Polsce, a jego podzespoły wytwarzane są w naszym warsztacie. Dzięki temu możemy go dowolnie modyfikować."
         }

        imgSrc1="https://i.ibb.co/XYJky9z/g1two.jpg"
        imgSrc2="https://i.ibb.co/Xptg4fZ/g1one.jpg"
        imgSrc3="https://i.ibb.co/GcytYR6/g1three.jpg"
      />
       <Table 
        row1="1200 mm"
        row2="1000 mm"
        row3="320 mm"
        row4="15 kg"
        row5="15 kg"
        row6="1,5 m/s"
        row7="4 silniki bezszczotkowe"
        row8="mosiężne"
        row9="2x Li-ion 3S 36Ah lub 2x Li-ion 3S 72Ah"
        row10="do 2h (@1,2 m/s z akumulatorem 36Ah)"
        row11="kompozyt epoksydowo-szklany"
        row12="ręczne lub autonomiczne"
        row13="LED"
      />
      <BoatInfo/>
      <SetIncludes/>
      <StyledWrapImg>
        <StaticImage
            src="../images/siderender.png"
            width={1000}
            alt="render"
            placeholder="tracedSVG"
            quality={100}
            objectFit="contain"
            objectPosition="0% 0%"
        />
      </StyledWrapImg>
      </>
   );
}
export default GerrisPage;