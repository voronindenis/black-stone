// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { createBlock } from '@/utils/bem-helper';
import './preview-product-card.sass';

const block = createBlock('preview-product-card');

type PreviewProductCardTypes = {
  image: string,
  title: string,
  price: string,
  link: string,
};

export const PreviewProductCard = ({
  image,
  title,
  price,
  link,
}: PreviewProductCardTypes) => (
  <Link to={link} className={block.block()}>
    <div style={{ backgroundImage: `url(${image})` }} className={block.element('image')} />
    <div className={block.element('text')}>
      <h2 className={block.element('title')}>{title}</h2>
      <p className={block.element('price')}>{price}</p>
    </div>
  </Link>
);
