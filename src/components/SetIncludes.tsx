import * as React from 'react';
import styled from 'styled-components';

export interface SetIncludesProps {}

const StyledBackground = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 40px 0;
    background-color: #9c9c9c;
`;

const StyledLeft = styled.div`
    position: absolute;
    left: -140px;
    top: 0;
    height: 100%;
    width: 140px;
    background-color: #9c9c9c;
`;

const StyledRight = styled.div`
    position: absolute;
    right: -140px;
    top: 0;
    height: 100%;
    width: 140px;
    background-color: #9c9c9c;
`;

const StyledSet = styled.div`
    flex-basis: 35%;

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

 
const SetIncludes: React.SFC<SetIncludesProps> = () => {
    return ( 
        <StyledBackground>
            <StyledLeft/>
            <StyledRight/>
            <StyledSet>
                <p>Zestaw zawiera:</p>
                <ul>
                    <li>zdalnie sterowaną jednostkę typu katamaran</li>
                    <li>autopilot z telemetrią</li>
                    <li>kontroler z drążkami do sterowania ręcznego</li>
                    <li>zestaw akumulatorów napędowych 36Ah (2h pływania @1,2m/s)</li>
                    <li>skrzynie transportowe</li>
                    <li>dwie ładowarki 10A do akumulatorów napędowych</li>
                    <li>ładowarka 2A kontrolera sterującego</li>
                    <li>uchwyt echosondę i odbiornik GNSS</li>
                    <li>narzędzia do obsługi</li>
                </ul>
            </StyledSet>
            <StyledOptionas>
                <p>Dodatkowe opcjonalne wyposażenie:</p>
                <ul>
                    <li>system wizyjny</li>
                    <li>komputer pokładowy z komunikacją ze stacją naziemną</li>
                    <li>GPS RTK</li>
                    <li>echosonda</li>
                    <li>system omijania przeszkód</li>
                    <li>system komunikcji GSM</li>
                </ul>
            </StyledOptionas>
        </StyledBackground>
     );
}
 
export default SetIncludes;