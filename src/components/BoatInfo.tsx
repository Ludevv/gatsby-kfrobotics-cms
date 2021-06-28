import * as React from 'react';
import styled from 'styled-components';
import { FaSignal } from "react-icons/fa";
import { mapStateToProps } from '../pages';
import { connect } from 'react-redux';

export interface BoatInfoProps {
    isEnglish: boolean;
}

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


 
const BoatInfo: React.SFC<BoatInfoProps> = ({isEnglish}) => {

  return (
        <StyledInfoBox>
            <StyledIcon>
                <StyledFaSignal/>
            </StyledIcon>
            <StyledInfoText>
                {isEnglish ? "In the case of unmanned boats, in the event of a failure, quick response is key to bringing the vessel safely to shore. That is why we equipped Gerris with a set of sensors that monitor the supply voltage, engine operation, temperature of the most important components and control range. All these data can be tracked by the operator on the controller screen. In the event of an abnormality, an alarm will sound so that the operator can stop the vessel, check what is happening and decide to return to shore." : "W przypadku łodzi bezzałogowych w razie awarii szybka reakcja jest kluczowa do bezpiecznego sprowadzenia jednostki do brzegu. Dlatego wyposażyliśmy Gerris’a w zestaw sensorów, które monitorują napięcie zasilania, pracę silników, temperaturę najważniejszych podzespołów oraz zasięg sterowania. Wszystkie te dane operator może śledzić na ekranie kontrolera. W razie nieprawidłowości włączy się alarm, aby operator mógł zatrzymać jednostkę, sprawdzić co się dzieje i podjąć decyzję o powrocie do brzegu."}
            </StyledInfoText>
        </StyledInfoBox>
   );
}
 
export default connect(mapStateToProps)(BoatInfo);