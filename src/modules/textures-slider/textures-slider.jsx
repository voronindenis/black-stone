// @flow
import * as React from 'react';
import cn from 'classnames';
import { map } from 'lodash';
import { createBlock } from '@/utils/bem-helper';
import type { TextureImageType } from '@/pages/textures-page/textures-page-types';
import './assets/textures-slider.sass';

const block = createBlock('textures-slider');

type TexturesSliderPropsType = {
  images: TextureImageType[],
};

type TexturesSliderStateType = {
  widthOfScrollArea: number,
  position: number,
};

export class TexturesSlider extends React.PureComponent<TexturesSliderPropsType, TexturesSliderStateType> {
  scrollArea: any = React.createRef();

  state = {
    widthOfScrollArea: 0,
    position: 0,
  };

  componentDidUpdate = (prevProps: TexturesSliderPropsType) => {
    if (prevProps.images !== this.props.images) {
      this.setState({
        widthOfScrollArea: this.widthCalculationOfScroll(this.scrollArea.offsetWidth, this.props.images.length),
      });
    }
  };

  getWidthOneElement() {
    return Math.round(this.scrollArea.offsetWidth * 0.2);
  }

  widthCalculationOfScroll = (
    objWidth: number,
    objNumbers: number,
  ) => Math.round((objWidth * 0.2 * objNumbers) / 2 - 1);

  handleClickOnRightArrow = () => {
    const { widthOfScrollArea } = this.state;
    this.setState(
      (prevState: TexturesSliderStateType) => {
        if (prevState.position < widthOfScrollArea) {
          return { position: prevState.position + this.getWidthOneElement() };
        }
      }
    );
  };

  handleClickOnLeftArrow = () => {
    this.setState(
      (prevState: TexturesSliderStateType) => {
        if (prevState.position !== 0) {
          return { position: prevState.position - this.getWidthOneElement() };
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
              map(this.props.images, (image: TextureImageType) => (
                <div key={Math.random()} className={block.element('image_wrapper')}>
                  <img
                    className={block.element('image')}
                    src={image.image}
                    alt=""
                  />
                </div>
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
