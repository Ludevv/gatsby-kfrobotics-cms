import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { mapStateToProps } from '../pages';

export interface TableProps {
  row1?: string;
  row2?: string;
  row3?: string;
  row4?: string;
  row5?: string;
  row6?: string;
  row7?: string;
  row8?: string;
  row9?: string;
  row10?: string;
  row11?: string;
  row12?: string;
  row13?: string;
  isEnglish: boolean;
}

const StyledTableBox = styled.div`
    width: 700px;
    margin: 120px auto;
    border-bottom: 5px solid #202020;
    filter: drop-shadow(rgba(0, 0, 0, 0.35) 0px 5px 15px);

    @media (max-width: 880px) {
	    margin: 50px auto;
      width: 100%;
      filter: drop-shadow(rgba(0, 0, 0, 0) 0px 0px 0px);
	  }
`;

const StyledTable = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;

    @media (max-width: 880px) {
      font-size: 15px;
	  }
    @media (max-width: 570px) {
      font-size: 13px;
	  }
`;

const StyledRow = styled.div`
    display: flex;

    &:nth-of-type(2n) {
        background-color: rgb(238, 238, 238);
        border-top: 1px solid rgb(218, 218, 218);
        border-bottom: 1px solid rgb(218, 218, 218);
    }
    &:nth-of-type(2n + 1) {
        background-color: rgb(254, 254, 254);
    }
    &:nth-of-type(1) {
        border-radius: 20px;
    }
`;

const StyledColumnName = styled.div`
    flex-basis: 50%;
    padding: 5px 0 5px 15px;

    @media (max-width: 880px) {
      flex-basis: 50%;
      padding: 5px 0 5px 5px;
      border-left: 2px solid #eee;
	  }
`;

const StyledHeaderColumnName = styled.div`
    flex-basis: 50%;
    padding: 10px 15px; 
    background-color: #202020;
    color: white;
    border-radius: 15px 0 0 0;
    font-weight: 500;
    font-size: 20px;

       @media (max-width: 880px) {
      flex-basis: 50%;
	  }
`;

const StyledColumnValue = styled.div`
    flex-basis: 50%;
    padding: 5px 0 5px 15px;
      @media (max-width: 880px) {
      flex-basis: 60%;
      border-right: 2px solid #eee;
	  }
`;

const StyledHeaderColumnValue = styled.div`
    flex-basis: 50%;
    padding: 10px 15px; 
    background-color: #202020;
    color: white;
    border-radius:  0 15px 0 0;
    font-weight: 500;
    font-size: 20px;

    @media (max-width: 880px) {
      flex-basis: 60%;
	  }
`;
 
const Table: React.SFC<TableProps> = ({isEnglish, row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13}) => {

  return ( 
        <StyledTableBox>
        <StyledTable>
          <StyledRow>
            <StyledHeaderColumnName>{!isEnglish ? "Parametr:" : "Parameter:"}</StyledHeaderColumnName>
            <StyledHeaderColumnValue>{!isEnglish ? "Value:" : "Wartość:"}</StyledHeaderColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Długość" : "Length"}</StyledColumnName>
            <StyledColumnValue>{row1}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Szerokość" : "Width"}</StyledColumnName>
            <StyledColumnValue>{row2}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Wysokość" : "Height"}</StyledColumnName>
            <StyledColumnValue>{row3}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Masa własna" : "Own weight"}</StyledColumnName>
            <StyledColumnValue>{row4}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Maksymalna ładowność" : "Maximum payload"}</StyledColumnName>
            <StyledColumnValue>{row5}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Prędkość maksymalna" : "Max Speed"}</StyledColumnName>
            <StyledColumnValue>{row6}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Napęd" : "Drive"}</StyledColumnName>
            <StyledColumnValue>{row7}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Śruby napędowe" : "Propellers"}</StyledColumnName>
            <StyledColumnValue>{row8}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Zasilanie" : "Power Supply"}</StyledColumnName>
            <StyledColumnValue>{row9}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Czas pływania" : "Swimming time"}</StyledColumnName>
            <StyledColumnValue>{row10}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Kadłub" : "Hull"}</StyledColumnName>
            <StyledColumnValue>{row11}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Sterowanie" : "Control"}</StyledColumnName>
            <StyledColumnValue>{row12}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>{!isEnglish ? "Oświetlenie" : "Lighting"}</StyledColumnName>
            <StyledColumnValue>{row13}</StyledColumnValue>
          </StyledRow>
        </StyledTable>
      </StyledTableBox>
   );
}
 
export default connect(mapStateToProps)(Table);