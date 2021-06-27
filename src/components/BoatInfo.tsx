import * as React from 'react';
import styled from 'styled-components';
import { FaSignal } from "react-icons/fa";

export interface BoatInfoProps {}

const StyledInfoBox = styled.div`
    display: flex;
    margin-bottom: 50px;
`;

const StyledIcon = styled.div`
    flex-basis: 200px;
    padding-right: 40px;
    margin-top: 30px;

    @media (max-width: 700px) {
        display: none;
	}
`;

const StyledFaSignal = styled(FaSignal)`
    font-size: 100px;  
    color: #202020;
`;

const StyledInfoText = styled.p`
    border-left: 3px solid #202020;
    font-size: 20px;
    padding: 0 0 0 40px;
    line-height: 1.8;

    @media (max-width: 700px) {
        border-left: none;
        padding: 0;
	}
`;


 
const BoatInfo: React.SFC<BoatInfoProps> = () => {

  return (
        <StyledInfoBox>
            <StyledIcon>
                <StyledFaSignal/>
            </StyledIcon>
            <StyledInfoText>
                W przypadku łodzi bezzałogowych w razie awarii szybka reakcja jest kluczowa do bezpiecznego sprowadzenia jednostki do brzegu. Dlatego wyposażyliśmy Gerris’a w zestaw sensorów, które monitorują napięcie zasilania, pracę silników, temperaturę najważniejszych podzespołów oraz zasięg sterowania. Wszystkie te dane operator może śledzić na ekranie kontrolera. W razie nieprawidłowości włączy się alarm, aby operator mógł zatrzymać jednostkę, sprawdzić co się dzieje i podjąć decyzję o powrocie do brzegu.
            </StyledInfoText>
        </StyledInfoBox>
   );
}
 
export default BoatInfo;