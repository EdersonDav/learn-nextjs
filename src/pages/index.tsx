import React from 'react';
import Head from 'next/head';

const Home: React.FC = (props: any) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>{props.data}</h1>
      </main>

    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`http://localhost:3000/api/cards/flag/4532894694415907`);
  const data = await response.json();
  return {
    props: {
      data: data.flagCard
    }
  }
}

export default Home;
