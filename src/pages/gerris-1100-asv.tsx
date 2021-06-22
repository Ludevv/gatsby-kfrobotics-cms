import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import BoatInfo from "../components/BoatInfo";
import Gerris from "../components/Gerris";
import SetIncludes from "../components/SetIncludes";
import Table from "../components/Table";
import { StyledWrapImg } from "./gerris-asv";

export interface Gerris1100PageProps {}
 
const Gerris1100Page: React.SFC<Gerris1100PageProps> = () => {
  return ( 
    <>
        <Gerris
        title="Gerris 1100 ASV"
        text1={
          "Ciągły rozwój, optymalizacja procesu produkcji i doskonalenie konstrukcji doprowadziło nas do punktu, w którym tworzymy udoskonalonego Gerrisa ASV - Gerris ASV 1100. Praktyczniejszego, sprawniejszego i jeszcze bardziej niezawodnego."
          }

        text2={
           "Projektujemy nowe pływaki o mniejszym współczynniku oporu dla wydłużenia czasu pracy na jednym ładowaniu. Tak jak jego poprzednik, również wykonany z wytrzymałego kompozytu epoksydowo-szklanego z wykorzystaniem technologii infuzji dla uzyskania najwyższej wytrzymałości przy najniższej możliwej masie elementu."
          }

        text3={ 
           "Nowe osłony napędowe - wytrzymalsze i łatwiejsze w utrzymaniu. Łatwe dostosowanie różnego rodzaju napędów. Niezatapialność - cecha jaką może pochwalić się niewiele tego typu jednostek. Mamy świadomość, że sprzęt pomiarowy jest cenny, stąd chcemy mieć pewność, że “nie pójdzie on na dno”."
          }
        imgSrc1=""
        imgSrc2=""
        imgSrc3=""
      />

      <Table 
        row1="1100 mm"
        row2="900-1000 mm"
        row3="320 mm"
        row4="14 kg"
        row5="15 kg"
        row6="2 m/s"
        row7="2 lub 4 silniki bezszczotkowe"
        row8="mosiężne lub poliwęglan"
        row9="12V Li-ion"
        row10="> 2h"
        row11="kompozyt epoksydowo-szklany"
        row12="ręczne lub autonomiczne"
        row13="LED + dookólna  lampa błyskowa"
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
export default Gerris1100Page;