/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import NavWrapper from './NavWrapper';
import './layout.css';
import GlobalStyle from './GlobalStyle.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavWrapper siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://boonsuen.com" target="_blank">Boonsuen</a>
        </footer>
      </div>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
