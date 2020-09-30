import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SiteLogo = () => {
    return (
        <StaticQuery 
            query={graphql`
                {
                    allWordpressWpLogo {
                    edges {
                        node {
                        url {
                            source_url
                        }
                        }
                    }
                    }
                }
            `}

            render={(queryData) => {
                return (
                    <img src={queryData.allWordpressWpLogo.edges[0].node.url.source_url} alt="Logo"/>
                );
            }}
        />
    );
};

export default SiteLogo;