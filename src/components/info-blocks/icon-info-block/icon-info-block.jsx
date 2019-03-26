// @flow
import * as React from 'react';
import { createBlock } from '@/utils/bem-helper';
import './icon-info-block.sass';

const block = createBlock('icon-info-block');

type IconInfoBlockProps = {
  icon: string,
  title?: string,
  text: React.Element<*> | string,
};

export const IconInfoBlock = ({
  icon,
  title,
  text,
}: IconInfoBlockProps) => (
  <div className={block.block()}>
    <div style={{ backgroundImage: `url(${icon})` }} className={block.element('icon')} />
    <div className={block.element('info')}>
      {
        title && (
          <p className={block.element('title')}>
            {title}
          </p>
        )
      }
      <div className={block.element('sub-text')}>
        {text}
      </div>
    </div>
  </div>
);
