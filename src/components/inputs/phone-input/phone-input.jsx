// @flow
import * as React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import MaskedInput from 'react-text-mask';
import cn from 'classnames';
import { createBlock } from '@/utils/bem-helper';
import './phone-input.sass';

const block = createBlock('phone-input');

type PhoneInputPropsType = {
  icon: boolean,
  className?: string,
};

export const PhoneInput = (props: PhoneInputPropsType) => (
  <div
    className={
      cn(props.className, block.block())
    }
  >
    {
      props.icon && (
        <div className={block.element('icon')}>
          <Icon disabled name="phone" size="large" />
        </div>
      )
    }
    <Input
      className={block.element('input')}
      children={(
        <MaskedInput
          mask={['8', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
          className={block.element('masked_input')}
          placeholder="8 (xxx) xxx-xx-xx"
          keepCharPositions={false}
          guide={false}
        />
      )}
    />
  </div>
);
