// @flow
import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { createBlock } from '@/utils/bem-helper';
import type { SelectOptionsType } from './select-input-types';
import './select-input.sass';

const block = createBlock('select-input');
const selectInputClassName = block.block();

type SelectInputPropsType = {
  placeholder: string,
  fluid: boolean,
  selection: boolean,
  options: SelectOptionsType,
  input: Object,
};

const handleChange = onChange => (e, { value }) => {
  e.preventDefault();
  onChange(value);
};

export const SelectInput = (props: SelectInputPropsType) => (
  <Dropdown
    className={selectInputClassName}
    onChange={handleChange(props.input.onChange)}
    {...props}
  />
);
