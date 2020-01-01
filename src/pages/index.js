import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  text-align: center;

  h1 {
    margin-bottom: 23px;
    color: #1E226D;
  }

  p {
    margin-bottom: 40px;
    color: #455880;
    font-size: 20px;
  }

  a {
    width: 160px;
    height: 55px;
    border-radius: 5px;
    background: #4353FF;
    color: #fff;
    font-weight: 500;
    text-align: center;
    line-height: 55px;
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
