// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { createBlock } from '@/utils/bem-helper';
import './preview-page-block.sass';

const block = createBlock('preview-page-block');

type PreviewPageBlockType = {
  img: string,
  title: string,
  link: string,
};

export const PreviewPageBlock = ({
  img,
  title,
  link,
}: PreviewPageBlockType) => (
  <div
    style={{ backgroundImage: `url(${img})` }}
    className={block.block()}
  >
    <Link className={block.element('link')} to={link}>
      <h3 className={block.element('title_text')}>{title}</h3>
    </Link>
  </div>
);
