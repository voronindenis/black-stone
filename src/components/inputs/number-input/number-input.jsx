// @flow
import * as React from 'react';
import { Input } from 'semantic-ui-react';
import { omit } from 'lodash';
import cn from 'classnames';
import { createBlock } from '@/utils/bem-helper';
import './number-input.sass';

const block = createBlock('number-input');

type NumberInputPropsType = {
  className?: string,
  placeholder?: string,
  fluid?: boolean,
  label: string,
  required?: boolean,
  error?: string,
};

export const NumberInput = (props: NumberInputPropsType) => (
  <div className={cn(props.className, block.block())}>
    <div className={block.element('label')}>
      {props.label}
    </div>
    <div className={block.element('input')}>
      <Input
        fluid={props.fluid}
        placeholder={props.placeholder}
        type="number"
        required={props.required}
        {...omit(props, ['fluid', 'label', 'placeholder', 'required'])}
      />
    </div>
    {
      props.error && (
        <div className={block.element('label')}>
          {props.error}
        </div>
      )
    }
  </div>
);
