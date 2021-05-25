import * as i from 'types';
import React from 'react';
import { Button } from 'antd';

import { Content } from 'modules/Home/styled';


const Home: i.NextPageComponent = () => {
  return (
    <>
      <Content>
        <p>
          BCC Sim by
          <Button type="link" href="https://github.com/sandervspl">@sandervspl</Button>
        </p>
      </Content>
    </>
  );
};

export default Home;
