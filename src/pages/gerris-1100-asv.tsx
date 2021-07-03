import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import BoatInfo from "../components/BoatInfo";
import Gerris from "../components/Gerris";
import SetIncludes from "../components/SetIncludes";
import Table from "../components/Table";
import { StyledWrapImg } from "./gerris-asv";
import gerrisOneImg from '../images/g3one.jpg';
import gerrisTwoImg from '../images/g3two.jpg';
import gerrisThreeImg from '../images/g3three.jpg';
import { mapStateToProps } from ".";
import { connect } from "react-redux";

export interface Gerris1100PageProps {
    isEnglish: boolean;
}
 
const Gerris1100Page: React.SFC<Gerris1100PageProps> = ({isEnglish}) => {
  return ( 
    <>
        <Gerris
        title="1100 ASV"
        text1={ !isEnglish ? 
          "Ciągły rozwój, optymalizacja procesu produkcji i doskonalenie konstrukcji doprowadziło nas do punktu, w którym tworzymy udoskonalonego Gerrisa ASV - Gerris ASV 1100. Praktyczniejszego, sprawniejszego i jeszcze bardziej niezawodnego."
          : 
         "Continuous development, optimization of the production process and design refinement have led us to the point where we are making the improved Gerris ASV - Gerris ASV 1200. More practical, efficient and even more reliable."}

        text2={ !isEnglish ? 
           "Projektujemy nowe pływaki o mniejszym współczynniku oporu dla wydłużenia czasu pracy na jednym ładowaniu. Tak jak jego poprzednik, również wykonany z wytrzymałego kompozytu epoksydowo-szklanego z wykorzystaniem technologii infuzji dla uzyskania najwyższej wytrzymałości przy najniższej możliwej masie elementu."
          : 
          "We design new floats with a lower drag coefficient to extend the working time on a single charge. Like its predecessor, it is also made of durable epoxy-glass composite using infusion technology for the highest strength with the lowest possible weight of the element." }

        text3={ !isEnglish ? 
           "Nowe osłony napędowe - wytrzymalsze i łatwiejsze w utrzymaniu. Łatwe dostosowanie różnego rodzaju napędów. Niezatapialność - cecha jaką może pochwalić się niewiele tego typu jednostek. Mamy świadomość, że sprzęt pomiarowy jest cenny, stąd chcemy mieć pewność, że “nie pójdzie on na dno”."
          : 
          'New drive covers - more durable and easier to maintain. Easy adaptation of various types of drives. Unsinkability - a feature that few such units can boast. We know that measuring equipment is valuable, so we want to be sure that" it will not go to the bottom ".'}

        imgSrc1={gerrisTwoImg}
        imgSrc2={gerrisOneImg}
        imgSrc3={gerrisThreeImg}
      />

      <Table 
        row1="1100 mm"
        row2="900-1000 mm"
        row3="320 mm"
        row4="14 kg"
        row5="15 kg"
        row6="2 m/s"
        row7={!isEnglish ? "2 lub 4 silniki bezszczotkowe" : "2 or 4 brushless motors"}
        row8={!isEnglish ? "mosiężne lub poliwęglan" : "brass or polycarbonate"}
        row9="12V Li-ion"
        row10="> 2h"
        row11={!isEnglish ? "kompozyt epoksydowo-szklany" : "epoxy-glass composite"}
        row12={!isEnglish ? "ręczne lub autonomiczne" : "manual or standalone"}
        row13={!isEnglish ? "LED + dookólna lampa błyskowa" : "LED + omni-directional flash"} 
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
export default connect(mapStateToProps)(Gerris1100Page);