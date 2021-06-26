import { graphql } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { ImQuotesLeft } from "@react-icons/all-files/Im/ImQuotesLeft";

export const query = graphql`
query MyQuery {
  allDatoCmsArticle(sort: {fields: date, order: DESC}) {
    nodes {
      content
      date
      title
      photo {
        url
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
  }
}
`

const StyledContent = styled.div`
  margin: 50px 0;
     div:last-child {
      border-bottom: none;
  }

`;

const StyledArticleBox = styled.div`
  margin: 50px 0;
  font-size: 18px;
  font-family: Roboto;
  display: flex;
  border-bottom: 2px solid gold;


 

`;

const StyledArticleTitle = styled.h3`
    color: #202020;
    font-size: 25px;
    margin-bottom: 15px;
`;
const StyledArticleContent = styled.p`
    
`;
const StyledArticleDate = styled.p`
   color: grey;
   text-align: right;
   margin-top: 20px;
   font-size: 17px;
   font-style: italic;
`;

const StyledArticlePhoto = styled.img`
    width: 350px;
    display: inline-block;
    margin-right: 50px;
    margin-bottom: 50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const StyledImQuotesLeft = styled(ImQuotesLeft)`
  font-size: 30px;
  margin-right: 15px;
  color: #202020;
  opacity: 0.85;
`;




export interface ArticlesPageProps {
  data: any
}
 
const ArticlesPage: React.SFC<ArticlesPageProps> = ({data}) => {

    const articles = data.allDatoCmsArticle.nodes.map(article => 
      <StyledArticleBox>
        { article.photo && <StyledArticlePhoto src={article.photo.url}/> }
        <div>
            <StyledArticleTitle><StyledImQuotesLeft/>{article.title}</StyledArticleTitle>
            <StyledArticleContent>{article.content}</StyledArticleContent>
            <StyledArticleDate>{article.date}</StyledArticleDate>
        </div>
        <hr/>
      </StyledArticleBox>
    )

  return ( 
    <StyledContent>
      <Title>Artykuły</Title>
      {articles}
    </StyledContent>
   );
}

export default ArticlesPage;