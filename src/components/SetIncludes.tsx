import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { mapStateToProps } from '../pages';

export interface SetIncludesProps {
    isEnglish: boolean;
}

const StyledBackground = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 40px 0;
    background-color: #9c9c9c;

    @media (max-width: 1000px) {
		flex-direction: column;
	}
`;

const StyledLeft = styled.div`
    position: absolute;
    left: -140px;
    top: 0;
    height: 100%;
    width: 140px;
    background-color: #9c9c9c;

     @media (max-width: 1650px) {
         left: -120px;
         width: 120px;
    }

    @media (max-width: 1400px) {
         left: -110px;
         width: 110px;

    }
    @media (max-width: 1235px) {
         left: -90px;
         width: 90px;
    }
    @media (max-width: 1024px) {
         left: -70px;
         width: 70px;
    }

    @media(max-width: 980px) {
         left: -50px;
         width: 50px;
        }
    @media(max-width: 780px) {
         left: -35px;
         width: 35px;
        }

    @media(max-width: 500px) {
         left: -20px;
         width: 20px;
        }
`;

const StyledRight = styled.div`
    position: absolute;
    right: -140px;
    top: 0;
    height: 100%;
    width: 140px;
    background-color: #9c9c9c;

         @media (max-width: 1650px) {
         right: -120px;
         width: 120px;
    }

    @media (max-width: 1400px) {
         right: -110px;
         width: 110px;

    }
    @media (max-width: 1235px) {
         right: -90px;
         width: 90px;
    }
    @media (max-width: 1024px) {
         right: -70px;
         width: 70px;
    }

    @media(max-width: 980px) {
         right: -50px;
         width: 50px;
        }
    @media(max-width: 780px) {
         right: -35px;
         width: 35px;
        }

    @media(max-width: 500px) {
         right: -20px;
         width: 20px;
        }
`;

const StyledSet = styled.div`
    flex-basis: 35%;

    @media (max-width: 1300px) {
		flex-basis: 50%;
	}


    p {
        text-transform: uppercase;
        font-weight: 500;
        color: white;
        font-size: 20px;
        
    }

    ul {
        list-style: square;
    }

    li {
        color: white;
        font-weight: 100;
        line-height: 2;
        font-size: 15px;
        margin-left: 17px;
    }
`;

const StyledOptionas = styled.div`
    flex-basis: 35%;

    @media (max-width: 1300px) {
		flex-basis: 50%;
        padding-top: 50px;
	}

    p {
        text-transform: uppercase;
        font-weight: 100;
        color: white;
        font-size: 20px;
    }

    ul {
        list-style: square;
    }

    li {
        color: white;
        font-weight: 100;
        line-height: 2;
        font-size: 15px;
        margin-left: 17px;
    }
`;

 
const SetIncludes: React.SFC<SetIncludesProps> = ({isEnglish}) => {
    return ( 
        <StyledBackground>
            <StyledLeft/>
            <StyledRight/>
            <StyledSet>
             <p>{!isEnglish ? "Zestaw zawiera" : "Set contains"}</p>
            <ul>
                <li>{!isEnglish ? "zdalnie sterowaną jednostkę typu katamaran" : "catamaran"}</li>
                <li>{!isEnglish ? "autopilot z telemetrią" : "autopilot with telemetry"}</li>
                <li>{!isEnglish ? "kontroler z drążkami do sterowania ręcznego" : "controller for manual control"}</li>
                <li>{!isEnglish ? "zestaw akumulatorów napędowych 36Ah (2h pływania @1,2m/s)" : "36Ah drive battery set (2h of swimming @ 1.2m / s)"}</li>
                <li>{!isEnglish ? "skrzynie transportowe" : "transport crates"}</li>
                <li>{!isEnglish ? "dwie ładowarki 10A do akumulatorów napędowych" : "two 10A chargers for driving batteries"}</li>
                <li>{!isEnglish ? "ładowarka 2A kontrolera sterującego" : "control controller 2A charger"}</li>
                <li>{!isEnglish ? "uchwyt echosondę i odbiornik GNSS" : "sonar holder and GNSS receiver"}</li>
                <li>{!isEnglish ? "narzędzia do obsługi" : "maintenance tools"}</li>
            </ul>
            </StyledSet>
            <StyledOptionas>
                <p>{!isEnglish ? "Dodatkowe opcjonalne wyposażenie:" : "Additional optional equipment:"}</p>
                <ul>
                    <li>{!isEnglish ? "system wizyjny" : "vision system"}</li>
                    <li>{!isEnglish ? 
                    "komputer pokładowy z komunikacją ze stacją naziemną" 
                    : 
                    "on-board computer communication with the ground station"}</li>
                    <li>{!isEnglish ? "GPS RTK" : "GPS RTK"}</li>
                    <li>{!isEnglish ? "echosonda" : "echosounder"}</li>
                    <li>{!isEnglish ? "system omijania przeszkód" : "obstacle avoidance system"}</li>
                    <li>{!isEnglish ? "system komunikcji GSM" : "GSM communication system"}</li>
                </ul>
            </StyledOptionas>
        </StyledBackground>
     );
}
 
export default connect(mapStateToProps)(SetIncludes);