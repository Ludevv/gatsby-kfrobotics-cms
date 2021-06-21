import * as React from "react";
import Gerris from "../components/Gerris";

export interface GerrisSurveyorPageProps {}
 
const GerrisSurveyorPage: React.SFC<GerrisSurveyorPageProps> = () => {
  return ( 
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

        imgSrc1="https://i.ibb.co/yXrfKrf/g2one.jpg"
        imgSrc2="https://i.ibb.co/rxKznL0/g2two.jpg"
        imgSrc3="https://i.ibb.co/gmnvf7B/g2three.jpg"
      />
   );
}
export default GerrisSurveyorPage;