// @flow
import * as React from 'react';
import { Dimmer, Header } from 'semantic-ui-react';
import logoUri from '@/assets/image/blackstone.svg';

type BlockingLoaderProps = {
  active?: boolean,
  text?:string,
};

const Loader = () => (
  <div className="loader-container">
    <svg id="page-loader">
      <circle cx="75" cy="75" r="20" />
      <circle cx="75" cy="75" r="35" />
      <circle cx="75" cy="75" r="50" />
      <circle cx="75" cy="75" r="65" />
    </svg>
  </div>
);

export const BlockingLoader = ({ active, text }: BlockingLoaderProps) => (
  <Dimmer active={active} page>
    <Header as="h1" style={{ backgroundColor: 'transparent' }}>
      <Loader />
      <Header.Subheader style={{ backgroundColor: 'transparent' }}>
        <img style={{ width: '350px' }} src={logoUri} alt="BlackStone" />
        {text && (<p>{text}</p>)}
      </Header.Subheader>
    </Header>
  </Dimmer>
);
