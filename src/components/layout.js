/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import NavWrapper from './NavWrapper';
import Footer from './Footer';
import './layout.css';
import GlobalStyle, { fontFaceRules } from './GlobalStyle.css';

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
      <Helmet>
        <style>{fontFaceRules}</style>
      </Helmet>
      <GlobalStyle />
      <NavWrapper siteTitle={data.site.siteMetadata.title} />
      <main className="container">{children}</main>
      <Footer />
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
