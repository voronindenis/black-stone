import * as React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { createStructuredSelector } from 'reselect';
import { getCommentsFromServer } from './comments-slider-actions';
import { getCommentsFromStore } from './comments-slider-selector';
import type { CommentsType } from './comments-slider-types';
import { CommentsSlider } from './comments-slider';

type CommentsSliderControllerComponentPropsType = {
  comments: CommentsType[],
  getCommentsFromServer: (message: string) => any,
};

class CommentsSliderControllerComponent extends React.PureComponent<CommentsSliderControllerComponentPropsType> {
  componentDidMount = () => {
    if (isEmpty(this.props.comments)) {
      this.props.getCommentsFromServer('message');
    }
  }

  render() {
    return (
      <CommentsSlider comments={this.props.comments} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  comments: getCommentsFromStore,
});

export const CommentsSliderController = connect(
  mapStateToProps,
  {
    getCommentsFromServer,
  }
)(CommentsSliderControllerComponent);
