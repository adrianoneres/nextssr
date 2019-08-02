import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/link';

import withAnalytics from '~/hocs/withAnalytics';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/panda.jpg" width="200" />
    
    <Title>Hello World</Title>

    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </>
)

export default withAnalytics()(Home);