// @flow
import * as React from 'react';
import cn from 'classnames';
import { map } from 'lodash';
import { createBlock } from '@/utils/bem-helper';
import { Comment } from '@/components/comment';
import type { CommentsType } from './comments-slider-types';
import './assets/comment-sliders.sass';

const block = createBlock('comments-slider');

type CommentsSliderPropsTypes = {
  comments: CommentsType[],
};

type CommentsSliderStateTypes = {
  widthOfScrollArea: number,
  position: number,
};

export class CommentsSlider extends React.PureComponent<CommentsSliderPropsTypes, CommentsSliderStateTypes> {
  scrollArea: any = React.createRef();

  state = {
    widthOfScrollArea: 0,
    position: 0,
  };

  componentDidUpdate = (prevProps: CommentsSliderPropsTypes) => {
    if (prevProps.comments !== this.props.comments) {
      this.setState({
        widthOfScrollArea: this.widthCalculationOfScroll(this.scrollArea.offsetWidth, this.props.comments.length),
      });
    }
  };

  getWidthOneComments() {
    return this.scrollArea.offsetWidth * 0.5;
  }

  widthCalculationOfScroll = (objWidth: number, objNumbers: number) => (
    objWidth * 0.5 * objNumbers - objWidth
  );

  handleClickOnRightArrow = () => {
    const { widthOfScrollArea } = this.state;
    this.setState(
      (prevState: CommentsSliderStateTypes) => {
        if (prevState.position < widthOfScrollArea) {
          return { position: prevState.position + this.getWidthOneComments() };
        }
      }
    );
  };

  handleClickOnLeftArrow = () => {
    this.setState(
      (prevState: CommentsSliderStateTypes) => {
        if (prevState.position !== 0) {
          return { position: prevState.position - this.getWidthOneComments() };
        }
      }
    );
  };

  setScrollArea = (node: any) => this.scrollArea = node;

  render() {
    const { position, widthOfScrollArea } = this.state;
    return (
      <div className={block.block()}>
        <div className={block.element('left_arrow_container')}>
          <a
            onClick={this.handleClickOnLeftArrow}
            className={
              cn(
                block.element('left_arrow'),
                position === 0 ? block.modifyElement('left_arrow', 'disabled') : null,
              )
            }
          />
        </div>
        <div
          ref={this.setScrollArea}
          className={block.element('scroll_area_wrapper')}
        >
          <div
            style={{ left: `-${position}px` }}
            className={block.element('scroll_area')}
          >
            {
              map(this.props.comments, (comment: CommentsType) => (
                <Comment
                  key={comment.id}
                  autor={comment.autor}
                  text={comment.text}
                />
              ))
            }
          </div>
        </div>
        <div className={block.element('right_arrow_container')}>
          <a
            onClick={this.handleClickOnRightArrow}
            className={
              cn(
                block.element('right_arrow'),
                position >= widthOfScrollArea ? block.modifyElement('right_arrow', 'disabled') : null,
              )
            }
          />
        </div>
      </div>
    );
  }
}
