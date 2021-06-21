import * as React from "react";
import Gerris from "../components/Gerris";

export interface GerrisPageProps {}
 
const GerrisPage: React.SFC<GerrisPageProps> = () => {
  return ( 
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
   );
}
export default GerrisPage;