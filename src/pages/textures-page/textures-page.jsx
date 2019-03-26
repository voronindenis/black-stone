// @flow
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { map, get } from 'lodash';
import cn from 'classnames';
import { createBlock } from '@/utils/bem-helper';
import { Button } from '@/components/buttons/button';
import { TexturesSlider } from '@/modules/textures-slider';
import { SimpleHeadingOfPage } from '@/modules/simple-heading-of-page';
import type { TexturesType, TextureSubspeciesType, TextureImageType } from './textures-page-types';
import './assets/textures-page.sass';

const block = createBlock('textures-page-content');

type TexturesPagePropsType = {
  textures: TexturesType[],
};

type TexturesPageStateType = {
  images: TextureImageType[],
  id: string,
};

export class TexturesPage extends React.PureComponent<TexturesPagePropsType, TexturesPageStateType> {
  state = {
    images: [],
    id: '',
  };

  handleClick = (images: TextureImageType[], id: string) => {
    this.setState({
      images,
      id,
    });
  };

  render() {
    return (
      <div className={block.block()}>
        <Container className={block.element('container')}>
          <Row className={block.element('row')}>
            <SimpleHeadingOfPage
              title="Текстура камня"
              description="Величина стоимости заказа на акриловую столешницу зависит от толщины и характеристик материала. Чем толще изделие и больше акрилового полимера затрачивается, тем она выше."
            />
          </Row>
        </Container>
        {
          map(this.props.textures, (texture: TexturesType) => (
            <React.Fragment key={texture.id}>
              <div className={block.element('manufacturer')}>
                <Container className={block.element('manufacturer_container')}>
                  <Row className={block.element('manufacturer_row')}>
                    <Col lg="6" className={block.element('manufacturer_title_container')}>
                      <h4 className={block.element('manufacturer_title')}>
                        {texture.title}
                      </h4>
                      <img className={block.element('manufacturer_image')} src={texture.image} alt={texture.title} />
                    </Col>
                    <Col lg="6" className={block.element('manufacturer_description_container')}>
                      <p className={block.element('manufacturer_description')}>
                        {texture.description}
                      </p>
                      <Button
                        label="Цветовая палитра"
                        type="default"
                        iconName="chevron up"
                        onClick={() => this.handleClick(get(texture, ['subspecies', '0', 'images']), texture.id)}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
              <div
                className={
                  cn(
                    block.element('textures'),
                    this.state.id === texture.id ? block.modifyElement('textures', 'open') : null,
                  )
                }
              >
                <Container className={block.element('textures_container')}>
                  <Row className={block.element('textures_row')}>
                    <Col lg="12" className={block.element('texture_subspecies_container')}>
                      {
                        map(texture.subspecies, (subspecies: TextureSubspeciesType) => (
                          <a
                            key={Math.random()}
                            onClick={() => this.handleClick(subspecies.images, texture.id)}
                            className={block.element('texture_subspecies_button')}
                          >
                            {subspecies.title}
                          </a>
                        ))
                      }
                    </Col>
                  </Row>
                  <Row className={block.element('textures_row')}>
                    <TexturesSlider
                      images={
                        this.state.id === texture.id
                          ? this.state.images
                          : []
                      }
                    />
                  </Row>
                </Container>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    );
  }
}
