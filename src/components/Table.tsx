import * as React from 'react';
import styled from 'styled-components'

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
 
const Table: React.SFC<TableProps> = ({row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13}) => {

  return ( 
        <StyledTableBox>
        <StyledTable>
          <StyledRow>
            <StyledHeaderColumnName>Parametr</StyledHeaderColumnName>
            <StyledHeaderColumnValue>Wartość</StyledHeaderColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Długość</StyledColumnName>
            <StyledColumnValue>{row1}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Szerokość</StyledColumnName>
            <StyledColumnValue>{row2}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Wysokość</StyledColumnName>
            <StyledColumnValue>{row3}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Masa własna</StyledColumnName>
            <StyledColumnValue>{row4}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Maksymalna ładowność</StyledColumnName>
            <StyledColumnValue>{row5}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Prędkość maksymalna</StyledColumnName>
            <StyledColumnValue>{row6}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Napęd</StyledColumnName>
            <StyledColumnValue>{row7}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Śruby napędowe</StyledColumnName>
            <StyledColumnValue>{row8}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Zasilanie</StyledColumnName>
            <StyledColumnValue>{row9}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Czas pływania</StyledColumnName>
            <StyledColumnValue>{row10}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Kadłub</StyledColumnName>
            <StyledColumnValue>{row11}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Sterowanie</StyledColumnName>
            <StyledColumnValue>{row12}</StyledColumnValue>
          </StyledRow>
          <StyledRow>
            <StyledColumnName>Oświetlenie</StyledColumnName>
            <StyledColumnValue>{row13}</StyledColumnValue>
          </StyledRow>
        </StyledTable>
      </StyledTableBox>
   );
}
 
export default Table;