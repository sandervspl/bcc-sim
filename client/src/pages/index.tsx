import * as i from 'types';
import React from 'react';

import { Anchor } from 'common';
import { Content } from 'modules/Home/styled';


const Home: i.NextPageComponent = () => {
  return (
    <>
      <Content>
        <p>
          BCC Sim by
          <Anchor to="https://github.com/sandervspl"> @sandervspl </Anchor>
        </p>
      </Content>
    </>
  );
};

export default Home;
