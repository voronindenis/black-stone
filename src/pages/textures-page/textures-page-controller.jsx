// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TexturesPage } from './textures-page';
import { getTexturesFromServer } from './textures-page-actions';
import { getTexturesFromStore } from './textures-page-selectors';
import type { TexturesType } from './textures-page-types';

type TexturesPageControllerComponentPropsType = {
  textures: TexturesType[],
  getTexturesFromServer: Function,
};

class TexturesPageControllerComponent extends React.PureComponent<TexturesPageControllerComponentPropsType> {
  componentDidMount() {
    if (this.props.textures.length === 0) {
      this.props.getTexturesFromServer('message');
    }
  }

  render() {
    return (
      <TexturesPage textures={this.props.textures} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  textures: getTexturesFromStore,
});

export const TexturesPageController = connect(
  mapStateToProps,
  {
    getTexturesFromServer,
  }
)(TexturesPageControllerComponent);
