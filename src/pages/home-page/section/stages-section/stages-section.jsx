// @flow
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { map } from 'lodash';
import { createBlock } from '@/utils/bem-helper';
import { STAGES } from './stages-section-constants';
import type { StagesType } from './stages-section-types';
import './assets/stages-section.sass';

const block = createBlock('stages-section');

// TODO [Denis_Voronin] 27/12/2018 replaced stub icons on real content

export const StagesSection = () => (
  <Container fluid className={block.block()}>
    <Row className={block.element('row')}>
      <Col lg="12" className={block.element('content')}>
        <h1 className={block.element('title')}>
          Схема работы с клиентом
        </h1>
        <div className={block.element('stages')}>
          {
            map(STAGES, (stage: StagesType) => (
              <React.Fragment key={stage.id}>
                <div className={block.element('stage')}>
                  <div className={block.element('icon-wrapper')}>
                    <div
                      style={{ backgroundImage: `url(${stage.icon})` }}
                      className={block.element('icon')}
                    />
                  </div>
                  <div className={block.element('text_container')}>
                    <p className={block.element('text')}>
                      {stage.text}
                    </p>
                  </div>
                </div>
                <div className={block.element('seperator')} />
              </React.Fragment>
            ))
          }
        </div>
      </Col>
    </Row>
  </Container>
);
