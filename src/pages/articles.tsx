import { graphql } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { ImQuotesLeft } from "react-icons/im";
import { connect } from "react-redux";
import { mapStateToProps } from ".";

export const query = graphql`
query MyQuery {
  allDatoCmsArticle(sort: {fields: date, order: DESC}) {
    nodes {
      content
      english
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

  	@media (max-width:850px) {
    		flex-direction: column;
  		}
`;

const StyledArticleTitle = styled.h3`
    color: #202020;
    font-size: 25px;
    margin-bottom: 15px;
      @media (max-width:850px) {
    		display: none;
  		}
`;
const StyledArticleTitleMobile = styled.h3`
    color: #202020;
    font-size: 25px;
    margin-bottom: 15px;
    display: none;
       @media (max-width:850px) {
    		display: block;
  		}
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
    height: 100%;
    display: inline-block;
    margin-right: 50px;
    margin-bottom: 50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

     	@media (max-width:850px) {
    		width: 100%;
  		}
`;

const StyledImQuotesLeft = styled(ImQuotesLeft)`
  font-size: 30px;
  margin-right: 15px;
  color: #202020;
  opacity: 0.85;
`;

export interface ArticlesPageProps {
  data: any
  isEnglish: boolean;
}
 
const ArticlesPage: React.SFC<ArticlesPageProps> = ({isEnglish, data}) => {

  console.log(isEnglish)

    const polishArticles =  data.allDatoCmsArticle.nodes.map(article => {
		if(!article.english) {
			return(
				<StyledArticleBox>
				<StyledArticleTitleMobile><StyledImQuotesLeft/>{article.title}</StyledArticleTitleMobile>
				{ article.photo && <StyledArticlePhoto src={article.photo.url}/> }
				<div>
					<StyledArticleTitle><StyledImQuotesLeft/>{article.title}</StyledArticleTitle>
					<StyledArticleContent>{article.content}</StyledArticleContent>
					<StyledArticleDate>{article.date}</StyledArticleDate>
				</div>
				<hr/>
			</StyledArticleBox>)
		}
    });

    const englishArticles = data.allDatoCmsArticle.nodes.map(article => {
		if(article.english) {
			return(
				<StyledArticleBox>
				<StyledArticleTitleMobile><StyledImQuotesLeft/>{article.title}</StyledArticleTitleMobile>
				{ article.photo && <StyledArticlePhoto src={article.photo.url}/> }
				<div>
					<StyledArticleTitle><StyledImQuotesLeft/>{article.title}</StyledArticleTitle>
					<StyledArticleContent>{article.content}</StyledArticleContent>
					<StyledArticleDate>{article.date}</StyledArticleDate>
				</div>
				<hr/>
			</StyledArticleBox>)
		}
    });

  return ( 
    <StyledContent>
		<Title>Artykuły</Title>
		{!isEnglish && polishArticles}
		{isEnglish && englishArticles}
    </StyledContent>
   );
}

export default connect(mapStateToProps)(ArticlesPage);