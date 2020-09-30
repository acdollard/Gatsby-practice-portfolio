import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './SiteInfo'

const MainMenuWrapper = styled.div`
    display: flex;
    background-color: rgb(150, 27, 58);
`

const MenuItem = styled(Link)`
    color: white;
    display: block;
    padding: 18px 16px;
`

const MainMenuInner = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    width: 960px;
    height: 100%;
`


const MainMenu = () => (
    <StaticQuery 
        query={graphql`
        {
            allWordpressWpApiMenusMenusItems {
              edges {
                node {
                  items {
                    title
                    object_slug
                  }
                }
              }
            }
          }
          `}
        render={props  => (
            <div>
                <MainMenuWrapper>
                <MainMenuInner>
                <SiteInfo />
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                    <MenuItem to={`/${item.object_slug}`} key={item.title}>
                        {item.title}
                    </MenuItem>
                ))}
                </MainMenuInner>
                </MainMenuWrapper>
            </div>
        )}
         />
        
  

)


    

export default MainMenu;