import * as i from 'types';
import React from 'react';

import { Anchor } from 'common';
import { Content } from 'modules/Home/styled';


const Home: i.NextPageComponent = () => {
  React.useEffect(() => {
    // polyfill test
    const obj = { a: 1 };
    const clone  = { ...obj };
    console.log({ clone });

    fetch('https://cms.sandervispoel.com/bedroom-medias')
      .then((res) => res.json())
      .then((data) => console.log({ data }));

    const url = new URL(window.location.href);
    console.log({ url });
  }, []);

  return (
    <>
      <Content>
        <p>
          <Anchor to="/data">Land Game</Anchor>
        </p>
        <p>
          Created by
          <Anchor to="https://github.com/sandervspl"> @sandervspl </Anchor>
        </p>
      </Content>
    </>
  );
};

export default Home;
