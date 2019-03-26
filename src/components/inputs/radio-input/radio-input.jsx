// @flow
import * as React from 'react';
import { Radio } from 'semantic-ui-react';
import { createBlock } from '@/utils/bem-helper';
import './radio-input.sass';

const block = createBlock('radio-input');
const radioInputClassName = block.block();
const radioInputImageLabel = block.element('image_label');
const radioInputImage = block.element('image');
const radioInputElement = block.element('element');

type RadioInputPropsType = {
  radioValue: string,
  input: Object,
  imageLabel?: string,
  label?: string,
};

export const RadioInput = ({
  imageLabel, label, radioValue, ...props
}: RadioInputPropsType) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.input.onChange(radioValue);
  };

  return (
    <div className={radioInputClassName}>
      {
        imageLabel && (
          <a
            className={radioInputImageLabel}
            onClick={handleClick}
          >
            <img src={imageLabel} alt={label} className={radioInputImage} />
          </a>
        )
      }
      <Radio
        checked={radioValue === props.input.value}
        value={radioValue}
        label={label}
        className={radioInputElement}
        onClick={handleClick}
        {...props}
      />
    </div>
  );
};
