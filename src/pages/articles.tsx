import * as React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  min-height: 51vh;
`;


export interface ArticlesPageProps {}
 
const ArticlesPage: React.SFC<ArticlesPageProps> = () => {
  return ( 
    <StyledContent>Artykuły</StyledContent>
   );
}

export default ArticlesPage;