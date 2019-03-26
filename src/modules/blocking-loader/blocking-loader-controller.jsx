// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { BlockingLoader } from './blocking-loader';
import { getActive } from './blocking-loader-selectors';

type BlockingLoaderControllerProps = {
  active?: boolean;
  text?: string,
};

const BlockingLoaderControllerComponent = ({ active = false, ...props }: BlockingLoaderControllerProps) => (
  <BlockingLoader active={active} {...props} />
);

const mapStateToProps = createStructuredSelector({
  active: getActive,
});

export const BlockingLoaderController = connect(
  mapStateToProps,
)(BlockingLoaderControllerComponent);
