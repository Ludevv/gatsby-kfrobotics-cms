import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import BoatInfo from "../components/BoatInfo";
import Gerris from "../components/Gerris";
import SetIncludesSurveyor from "../components/SetIncludesSurveyor";
import Table from "../components/Table";
import { StyledWrapImg } from "./gerris-asv";
import gerrisOneImg from '../images/g2one.jpg';
import gerrisTwoImg from '../images/g2two.jpg';
import gerrisThreeImg from '../images/g2three.jpg';

export interface GerrisSurveyorPageProps {}
 
const GerrisSurveyorPage: React.SFC<GerrisSurveyorPageProps> = () => {
  return ( 
    <>
    <Gerris
        title="Gerris ASV Surveyor"
        text1={
          "Gerris ASV Surveyor - Jest to rozszerzona wersja katamaranu Gerris ASV ze zintegrowanym systemem do pomiarów batymetrycznych." 
          }

        text2={  
          "W autonomicznym katamaranie zamontowane zostały dodatkowo echosonda, GPS RTK, komputer pokładowy z Windows 10 oraz cyfrowy system transmisji danych pomiarowych do stacji naziemnej. Taki zestaw pozwala na kompleksowe wykonywanie pomiarów batymetrycznych “out of the box” z podglądem danych na żywo w stacji naziemnej."
          }

        text3={
          "W tym modelu zdecydowaliśmy się przetestować nowy układ napędowy. Są nim dwa zewnętrzne napędy tunelowe zanurzone całkowicie pod wodą. Choć nie są zdublowane ich moc zapewnia jednostce tę samą szybkość i niesamowitą zwrotność przy niskim zużyciu prądu."}

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
        row7="2 pędniki BR T200"
        row8="poliwęglan"
        row9="2x Li-ion 3S 36Ah lub 2x Li-ion 3S 72Ah"
        row10="do 2h (@1,2 m/s z akumulatorem 36Ah)"
        row11="kompozyt epoksydowo-szklany"
        row12="ręczne lub autonomiczne"
        row13="LED"
      />
      <BoatInfo/>
      <SetIncludesSurveyor/>
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
export default GerrisSurveyorPage;