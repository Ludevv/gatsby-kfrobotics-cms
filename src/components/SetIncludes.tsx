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
                <li>{!isEnglish ? "zdalnie sterowan?? jednostk?? typu katamaran" : "catamaran"}</li>
                <li>{!isEnglish ? "autopilot z telemetri??" : "autopilot with telemetry"}</li>
                <li>{!isEnglish ? "kontroler z dr????kami do sterowania r??cznego" : "controller for manual control"}</li>
                <li>{!isEnglish ? "zestaw akumulator??w nap??dowych 36Ah" : "36Ah drive battery set"}</li>
                <li>{!isEnglish ? "skrzynie transportowe" : "transport crates"}</li>
                <li>{!isEnglish ? "dwie ??adowarki 10A do akumulator??w" : "two 10A chargers batteries"}</li>
                <li>{!isEnglish ? "??adowarka 2A kontrolera steruj??cego" : "control controller 2A charger"}</li>
                <li>{!isEnglish ? "uchwyt echosond?? i odbiornik GNSS" : "sonar holder and GNSS receiver"}</li>
                <li>{!isEnglish ? "narz??dzia do obs??ugi" : "maintenance tools"}</li>
            </ul>
            </StyledSet>
            <StyledOptionas>
                <p>{!isEnglish ? "Dodatkowe opcjonalne wyposa??enie:" : "Additional optional equipment:"}</p>
                <ul>
                    <li>{!isEnglish ? "system wizyjny" : "vision system"}</li>
                    <li>{!isEnglish ? 
                    "komputer z komunikacj?? ze stacj?? naziemn??" 
                    : 
                    "on-board computer communication"}</li>
                    <li>{!isEnglish ? "GPS RTK" : "GPS RTK"}</li>
                    <li>{!isEnglish ? "echosonda" : "echosounder"}</li>
                    <li>{!isEnglish ? "system omijania przeszk??d" : "obstacle avoidance system"}</li>
                    <li>{!isEnglish ? "system komunikcji GSM" : "GSM communication system"}</li>
                </ul>
            </StyledOptionas>
        </StyledBackground>
     );
}
 
export default connect(mapStateToProps)(SetIncludes);