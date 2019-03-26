// @flow
import * as React from 'react';
import { Button as SuiButton, ButtonProps as SuiButtonProps } from 'semantic-ui-react';
import cn from 'classnames';
import { createBlock } from '@/utils/bem-helper';
import './tab-button.sass';

const block = createBlock('tab-button');

export type ButtonProps = {
  label?: React.Node,
  onClick?: (...props: Array<any>) => any,
  className?: string,
  active: boolean,
} & SuiButtonProps;

export const TabButton = ({
  label,
  onClick,
  className = '',
  active = false,
  ...restProps
}: ButtonProps) => (
  <SuiButton
    className={cn(
      className,
      block.block(),
      active ? block.modifyBlock('active') : null,
    )}
    onClick={onClick}
    {...restProps}
  >
    {label}
  </SuiButton>
);
