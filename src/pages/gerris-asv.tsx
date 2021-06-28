import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import BoatInfo from "../components/BoatInfo";
import Gerris from "../components/Gerris";
import SetIncludes from "../components/SetIncludes";
import Table from "../components/Table";
import styled from 'styled-components';
import gerrisOneImg from '../images/g1one.jpg';
import gerrisTwoImg from '../images/g1two.jpg';
import gerrisThreeImg from '../images/g1three.jpg';
import { mapStateToProps } from ".";
import { connect } from "react-redux";

export interface GerrisPageProps {
  isEnglish: boolean;
}

export const StyledWrapImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
 
const GerrisPage: React.SFC<GerrisPageProps> = ({isEnglish}) => {
  return ( 
    <>
    <Gerris
        title={"Gerris ASV"}
      text1={ !isEnglish ? 
          "Gerris ASV to bezzałogowy katamaran z funkcją ręcznego i autonomicznego sterowania, stworzony z myślą o dokonywaniu pomiarów batymetrycznych przy wykorzystaniu montowanego na nim sprzętu. Zastosowane rozwiązania konstrukcyjne mają na celu ułatwienie obsługi, a wysokiej jakości podzespoły maksymalizację niezawodności. System uniwersalnego mocowania sprzętu pomiarowego pozwala w prosty sposób zamontować na katamaranie dowolny odbiornik GNSS i echosondę." 
          : 
          "Gerris ASV is an unmanned catamaran with manual and autonomous control function, designed to perform bathymetric measurements using the equipment mounted on it. The applied design solutions are designed to facilitate service, and high-quality components to maximize reliability. The universal mounting system for measuring equipment allows you to easily mount any GNSS receiver and echo sounder on the catamaran."}

        text2={ !isEnglish ? 
          "Gerris ASV ze zintegrowanym autopilotem szybciej i dokładniej wykona za nas żmudne pomiary na dużych akwenach. Wystarczy w aplikacji zaznaczyć interesujący nas obszar, a dalej sterowaniem zajmie się autopilot płynąc precyzyjnie wzdłuż zadanej trasy."
          : 
          "Gerris ASV with an integrated autopilot will perform tedious measurements on large waters faster and more accurately. It is enough to mark the area of interest in the application, and then the autopilot will take care of the control, flowing precisely along the given route."}

        text3={ !isEnglish ? 
          "Przetestowaliśmy Gerris’a w najróżniejszych warunkach pogodowych i terenowych, aby mieć pewność, że te czynniki nie będą stanowiły przeszkody do jego pracy. Niestraszne mu są niskie i wysokie temperatury, piasek, żwir, roślinność oraz deszcz. Kadłub wykonany z kompozytu epoksydowo-szklanego cechuje się wysoką odpornością na uderzenia. Katamaran został od podstaw zaprojektowany w Polsce, a jego podzespoły wytwarzane są w naszym warsztacie. Dzięki temu możemy go dowolnie modyfikować."
          : 
          "We have tested Gerris in a wide variety of weather and terrain conditions to ensure that these factors do not obstruct his operation. It is not afraid of low and high temperatures, sand, gravel, vegetation and rain. The hull made of epoxy-glass composite is characterized by high impact resistance. The catamaran has been designed from scratch in Poland, and its components are manufactured in our workshop. Thanks to this, we can freely modify it."}

        imgSrc1={gerrisTwoImg}
        imgSrc2={gerrisOneImg}
        imgSrc3={gerrisThreeImg}
      />
      <Table 
        row1="1200 mm"
        row2="1000 mm"
        row3="320 mm"
        row4="15 kg"
        row5="15 kg"
        row6="1,5 m/s"
        row7={!isEnglish ? "4 silniki bezszczotkowe" : "4 brushless motors"}
        row8={!isEnglish ? "mosiężne" : "brass"}
        row9={!isEnglish ? "2x Li-ion 3S 36Ah lub 2x Li-ion 3S 72Ah" : "2x Li-ion 3S 36Ah or 2x Li-ion 3S 72Ah"}
        row10={!isEnglish ? "do 2h (@1,2 m/s z akumulatorem 36Ah)" : "to 2h (@1,2 m/s with battery 36Ah)"}
        row11={!isEnglish ? "kompozyt epoksydowo-szklany" : "epoxy-glass composite"}
        row12={!isEnglish ? "ręczne lub autonomiczne" : "manual or standalone"}
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
export default connect(mapStateToProps)(GerrisPage);