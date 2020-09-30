/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import MainMenu from "./MainMenu"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?familiy=Open+Sans');
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
    const queryData = useStaticQuery(graphql`
    {
      allWordpressWpLogo {
        edges {
          node {
            url {
              mime_type
              source_url
            }
          }
        }
      }
    }
    `);

  return (
    <>
      <Helmet>
        <link 
          rel="icon" 
          type={queryData.allWordpressWpLogo.edges[0].node.url.mime_type} 
          href={queryData.allWordpressWpLogo.edges[0].node.url.source_url} sizes="16x16" />
      </Helmet>
      <GlobalStyles />
      <MainMenu />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


