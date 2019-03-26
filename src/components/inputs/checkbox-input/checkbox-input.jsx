// @flow
import * as React from 'react';
import { Checkbox } from 'semantic-ui-react';
import { createBlock } from '@/utils/bem-helper';
import './checkbox-input.sass';

const block = createBlock('checkbox-input');
const radioInputClassName = block.block();
const radioInputLabel = block.element('label');
const checkboxInput = block.element('input');

type CheckboxInputPropsType = {
  label: string,
  checked?: boolean,
  input: Object,
};

const handleChange = onChange => (e, data) => {
  e.preventDefault();
  onChange(data.checked);
};

export const CheckboxInput = ({
  label, checked, input, ...props
}: CheckboxInputPropsType) => (
  <div className={radioInputClassName}>
    <div className={checkboxInput}>
      <Checkbox
        onChange={handleChange(input.onChange)}
        checked={checked || Boolean(input.value)}
        {...props}
      />
    </div>
    <div className={radioInputLabel}>
      {label}
    </div>
  </div>
);
