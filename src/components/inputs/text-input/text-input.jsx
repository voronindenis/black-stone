// @flow
import * as React from 'react';
import { Input } from 'semantic-ui-react';
import cn from 'classnames';
import { createBlock } from '@/utils/bem-helper';
import './text-input.sass';

const block = createBlock('text-input');

type TextInputPropsType = {
  className?: string,
  placeholder?: string,
  fluid?: boolean,
};

export const TextInput = (props: TextInputPropsType) => (
  <Input
    fluid={props.fluid}
    className={cn(props.className, block.block())}
    placeholder={props.placeholder}
  />
);
