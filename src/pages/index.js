import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const Hero = styled.div`
  display: flex;
  flex-direction: column;

  a {
    width: 160px;
    height: 55px;
    background: #4353FF;
    border-radius: 5px;
    color: #fff;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <h1>Hassle-free resume creation?</h1>
      <p>No manual formatting. Dead simple.</p>
      <Link to="/signup">Get Started</Link>
    </Hero>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
