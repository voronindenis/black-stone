// @flow
import * as React from 'react';
import { map } from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import { createBlock } from '@/utils/bem-helper';
import { Button } from '@/components/buttons/button';
import { BlockingLoader } from '@/modules/blocking-loader';
import { Catalog } from '@/modules/catalog';
import type { ProductCardsType, ProductPhotoType } from '@/modules/catalog';
import './assets/product-card-page.sass';
import { ContactForm } from '@/modules/contact-form';
import { Modal } from '@/modules/modal';

const block = createBlock('product-card-page-content');

type ProductCardPagePropsType = {
  productCards: ProductCardsType[],
  productCard: ProductCardsType,
};

type ProductCardPageStateType = {
  image: string,
  open: boolean,
};

export class ProductCardPage extends React.PureComponent<ProductCardPagePropsType, ProductCardPageStateType> {
  state = {
    image: '',
    open: false,
  };

  handleClick = (img: string) => {
    this.setState({
      image: img,
    });
  };

  handleCallBackClick = () => this.setState({ open: true });

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { productCard, productCards } = this.props;
    const { image } = this.state;
    const isChecked = () => {
      if (image) {
        return image;
      }
      return productCard.image;
    };
    return (
      <React.Fragment>
        {
          productCard
            ? (
              <div className={block.block()}>
                <Modal
                  size="tiny"
                  header="Свяжемся с Вами в течение 10 минут"
                  children={<ContactForm />}
                  open={this.state.open}
                  close={this.close}
                />
                <Container className={block.element('container')}>
                  <Row className={block.element('row')}>
                    <Col lg="2" className={block.element('photos')}>
                      {
                        map(productCard.photos, (item: ProductPhotoType) => (
                          <div key={item.id} className={block.element('photo_miniature_container')}>
                            <a className={block.element('photo_miniature_link')} onClick={() => this.handleClick(item.photo)}>
                              <img src={item.photo} alt={productCard.title} className={block.element('photo_miniature')} />
                            </a>
                          </div>
                        ))
                      }
                    </Col>
                    <Col lg="5" className={block.element('photo_view_block')}>
                      <img className={block.element('photo')} src={isChecked()} alt={productCard.title} />
                    </Col>
                    <Col lg="5" className={block.element('description')}>
                      <h1 className={block.element('title')}>
                        {productCard.title}
                      </h1>
                      <p className={block.element('price')}>
                        {productCard.price}
                      </p>
                      <p className={block.element('description_text')}>
                        {productCard.description}
                      </p>
                      <Button
                        className={block.element('button')}
                        label="Заказать звонок"
                        type="primary"
                        onClick={this.handleCallBackClick}
                      />
                    </Col>
                  </Row>
                  <Row className={block.element('row')}>
                    <Catalog type="slider" productCards={productCards} />
                  </Row>
                </Container>
              </div>
            )
            : <BlockingLoader />
        }
      </React.Fragment>
    );
  }
}
