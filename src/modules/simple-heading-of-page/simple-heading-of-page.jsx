// @flow
import * as React from 'react';
import { Col } from 'reactstrap';
import { map } from 'lodash';
import { createBlock } from '@/utils/bem-helper';
import './simple-heading-of-page.sass';
import type { IconsInfoBlocksType } from './simple-heading-of-page-types';
import { IconInfoBlock } from '@/components/info-blocks/icon-info-block';

const block = createBlock('simple-heading');

type SimpleHeadingOfPagePropsType = {
  title: string,
  description: string,
  iconsInfoBlocks?: IconsInfoBlocksType[]
};

export const SimpleHeadingOfPage = (props: SimpleHeadingOfPagePropsType) => (
  <div className={block.block()}>
    <Col lg="7" className={block.element('title_container')}>
      <h1 className={block.element('title')}>{props.title}</h1>
      {
        props.iconsInfoBlocks
          ? (
            <div className={block.element('icon_info_blocks')}>
              {
                map(props.iconsInfoBlocks, (iconInfoBlock: IconsInfoBlocksType) => (
                  <IconInfoBlock
                    key={iconInfoBlock.id}
                    icon={iconInfoBlock.icon}
                    text={iconInfoBlock.text}
                  />
                ))
              }
            </div>
          )
          : null
      }
    </Col>
    <Col lg="5" className={block.element('description_container')}>
      <p className={block.element('description')}>
        {props.description}
      </p>
    </Col>
  </div>
);
