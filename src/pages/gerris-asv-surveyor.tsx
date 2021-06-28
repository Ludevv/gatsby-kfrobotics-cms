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
import { mapStateToProps } from ".";
import { connect } from "react-redux";

export interface GerrisSurveyorPageProps {
  isEnglish: boolean;
}
 
const GerrisSurveyorPage: React.SFC<GerrisSurveyorPageProps> = ({isEnglish}) => {
  return ( 
    <>
    <Gerris
        title="Surveyor"
       text1={ !isEnglish ? 
          "Gerris ASV Surveyor - Jest to rozszerzona wersja katamaranu Gerris ASV ze zintegrowanym systemem do pomiarów batymetrycznych." 
          : 
          "Gerris ASV Surveyor - This is an extended version of the Gerris ASV catamaran with an integrated bathymetric measurement system."}

        text2={ !isEnglish ? 
          "W autonomicznym katamaranie zamontowane zostały dodatkowo echosonda, GPS RTK, komputer pokładowy z Windows 10 oraz cyfrowy system transmisji danych pomiarowych do stacji naziemnej. Taki zestaw pozwala na kompleksowe wykonywanie pomiarów batymetrycznych “out of the box” z podglądem danych na żywo w stacji naziemnej."
          : 
          "The autonomous catamaran also has an echo sounder, GPS RTK, on-board computer with Windows 10 and a digital measurement data transmission system to the ground station. Such a set allows for comprehensive“ out of the box ”bathymetric measurements with live data preview at the ground station. "}

        text3={ !isEnglish ? 
          "W tym modelu zdecydowaliśmy się przetestować nowy układ napędowy. Są nim dwa zewnętrzne napędy tunelowe zanurzone całkowicie pod wodą. Choć nie są zdublowane ich moc zapewnia jednostce tę samą szybkość i niesamowitą zwrotność przy niskim zużyciu prądu."
          : 
          "In this model, we decided to test a new driveline. These are two external tunnel drives completely submerged in water. Although they are not doubled, their power provides the unit with the same speed and incredible maneuverability with low power consumption."}
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
        row7={!isEnglish ? "2 pędniki BR T200" : "2 propellers BR T200"}
        row8={!isEnglish ? "poliwęglan" : "polycarbonate"}
        row9={!isEnglish ? "2x Li-ion 3S 36Ah lub 2x Li-ion 3S 72Ah" : "2x Li-ion 3S 36Ah or 2x Li-ion 3S 72Ah"}
        row10={!isEnglish ? "do 2h (@1,2 m/s z akumulatorem 36Ah)" : "to 2h (@1,2 m/s with battery 36Ah)"}
        row11={!isEnglish ? "kompozyt epoksydowo-szklany" : "epoxy-glass composite"}
        row12={!isEnglish ? "ręczne lub autonomiczne" : "manual or standalone"}
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
export default connect(mapStateToProps)(GerrisSurveyorPage);