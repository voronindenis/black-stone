// @flow
import * as React from 'react';
import { Button as SuiButton, ButtonProps as SuiButtonProps, Icon } from 'semantic-ui-react';
import cn from 'classnames';
import { createBlock } from '@/utils/bem-helper';
import type { ButtonTypes } from './button-types';
import './button.sass';

export type ButtonProps = {
  type?: ButtonTypes,
  label?: React.Node,
  htmlType?: 'button' | 'reset' | 'submit',
  disabled?: boolean,
  fullWidth?: boolean,
  onClick?: (...props: Array<any>) => any,
  className?: string,
  children?: React.Node,
  iconName?: string,
} & SuiButtonProps;

const block = createBlock('custom-button');

export const Button = ({
  label,
  type = 'primary',
  htmlType,
  disabled,
  onClick,
  fullWidth,
  className = '',
  children,
  iconName,
  ...restProps
}: ButtonProps) => (
  <SuiButton
    className={cn(
      className,
      block.block(),
      `${block.block()}--${type}`,
    )}
    disabled={disabled}
    onClick={onClick}
    type={htmlType}
    fluid={fullWidth}
    {...restProps}
  >
    <React.Fragment>
      {children || label}
      {
        iconName
          ? <Icon name={iconName} size="big" className={block.element('icon')} />
          : null
      }
    </React.Fragment>
  </SuiButton>
);
