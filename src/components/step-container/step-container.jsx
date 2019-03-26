// @flow
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { createBlock } from '@/utils/bem-helper';
import './step-container.sass';

// TODO: [Denis_Voronin] 3/02/2019 Replaced classNames to constants for perfomance
const block = createBlock('step-container');

type StepContainerPropsType = {
  number?: string,
  title: string,
  children: React.Node,
  visible: boolean,
};

export const StepContainer = (props: StepContainerPropsType) => {
  if (!props.visible) {
    return null;
  }
  return (
    <Container className={block.block()}>
      <Row className={block.element('row')}>
        {
          props.number && (
            <Col lg="2" className={block.element('step_number_container')}>
              <p className={block.element('step_number')}>
                №
                {props.number}
              </p>
            </Col>
          )
        }
        <Col lg={props.number ? '10' : '12'} className={block.element('step_title_container')}>
          <p className={block.element('step_title')}>{props.title}</p>
        </Col>
      </Row>
      <Row className={block.element('row')}>
        <Col lg="12" className={block.element('step_content')}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};
