import React from 'react'
import{graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const PortfolioItem = styled.div`
  widh: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`
const PortfolioImage = styled.img`
  max-width: 100%;
`

const PortfolioItems = () => (
     <StaticQuery 
        query={graphql`
     {
        allWordpressWpPortfolio {
          edges {
            node {
              id
              slug
              title
              excerpt
              content
              featured_media{
                source_url
              }
              
            }
          }
        }
      }
      `}  render={props => (
        <PortfolioItemsWrapper>
          {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
            <PortfolioItem key={portfolioItem.node.id}>
                <h1>{portfolioItem.node.title}</h1>
                <PortfolioImage src={portfolioItem.node.featured_media.source_url} alt="thumbnail"/> 
                <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}} />
                <Link to={`/portfolio/${portfolioItem.node.slug}`}>
                    Read More
                </Link>
            </PortfolioItem>
          ))}
        </PortfolioItemsWrapper>
        )} 
      />
)
          

export default PortfolioItems;