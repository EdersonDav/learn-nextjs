import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import {
  HomeWrapper,
  TitleHome,
  SubtitleHome,
  ListHome,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Head>
        <title>Learn NextJs</title>
      </Head>

      <TitleHome>Next Project</TitleHome>
      <SubtitleHome>
        This project was developed to learn NextJs framework, below has a list
        projects.
      </SubtitleHome>

      <ListHome>
        <li>
          <Link href={`/card`}>
            <a>Card Interative.</a>
          </Link>
        </li>
        <li>
          <Link href={`/gauge`}>
            <a>Gauge Chart.</a>
          </Link>
        </li>
      </ListHome>
    </HomeWrapper>
  );
};

export default Home;
