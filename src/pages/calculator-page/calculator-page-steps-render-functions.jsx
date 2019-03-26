// @flow
import * as React from 'react';
import { Field } from 'redux-form';
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'semantic-ui-react';
import { map, get } from 'lodash';
import type { BasePriceListType, AdditionalServicesType } from '@/modules/price-list';
import type { SelectOptionsType } from '@/components/inputs/select-input';
import { SelectInput } from '@/components/inputs/select-input';
import { RadioInput } from '@/components/inputs/radio-input';
import { NumberInput } from '@/components/inputs/number-input';
import { CheckboxInput } from '@/components/inputs/checkbox-input';
import {
  COUNTERTOP_TYPES,
  COUNTERTOP_TYPES_ENUM,
  CALCULATOR_PAGE_CLASS_NAMES,
} from './calculator-page-constants';
import type { TotalStepArgumentsType, FourStepArgumentsType } from './calculator-page-types';

const BaseCheckboxFields = ({ isNeedStoneWashing }: { isNeedStoneWashing: boolean}) => (
  <React.Fragment>
    <Field
      name="isNeedCornerProcessing"
      component={CheckboxInput}
      label="Нужна ли обработка углов?"
    />
    <Field
      name="isNeedWallBoard"
      component={CheckboxInput}
      label="Нужен ли стеновой бортик?"
    />
    <Field
      name="isNeedEndEdge"
      component={CheckboxInput}
      label="Нужна ли торцевая кромка?"
    />
    <Field
      name="isNeedStoneWashing"
      component={CheckboxInput}
      label="Нужна ли мойка из камня?"
    />
    {
      isNeedStoneWashing && (
        <Field
          name="isNeedAdditionalStoneWashing"
          component={CheckboxInput}
          label="Нужна ли дополнительная мойка из камня?"
        />
      )
    }
  </React.Fragment>
);

const lineCounterTopImageFormSection = (countertopType: string, isNeedStoneWashing: boolean) => (
  <Container className={CALCULATOR_PAGE_CLASS_NAMES.CONTERTOP_SIZES_FORM_SECTION_CONTAINER_CLASS_NAME}>
    <Row className={CALCULATOR_PAGE_CLASS_NAMES.CONTERTOP_SIZES_FORM_SECTION_ROW_CLASS_NAME}>
      <Col className={CALCULATOR_PAGE_CLASS_NAMES.CONTERTOP_SIZES_FORM_SECTION_FORM_CONTENT_CLASS_NAME} lg="4">
        <Field
          name="aLength"
          component={NumberInput}
          label="Длина А"
          fluid
          required={countertopType === COUNTERTOP_TYPES_ENUM.LINE_TYPE}
        />
        <Field
          name="width"
          component={NumberInput}
          label="Ширина"
          fluid
          required={countertopType === COUNTERTOP_TYPES_ENUM.LINE_TYPE}
        />
        <BaseCheckboxFields isNeedStoneWashing={isNeedStoneWashing} />
      </Col>
      <Col
        className={CALCULATOR_PAGE_CLASS_NAMES.LINE_COUNTERTOP_TYPE_IMAGE_CLASS_NAME}
        lg="8"
      />
    </Row>
  </Container>
);

const gCounterTopImageFormSection = (countertopType: string, isNeedStoneWashing: boolean) => (
  <Container className={CALCULATOR_PAGE_CLASS_NAMES.CONTERTOP_SIZES_FORM_SECTION_CONTAINER_CLASS_NAME}>
    <Row className={CALCULATOR_PAGE_CLASS_NAMES.CONTERTOP_SIZES_FORM_SECTION_ROW_CLASS_NAME}>
      <Col className={CALCULATOR_PAGE_CLASS_NAMES.CONTERTOP_SIZES_FORM_SECTION_FORM_CONTENT_CLASS_NAME} lg="4">
        <Field
          name="aLength"
          component={NumberInput}
          label="Длина А"
          fluid
          required={countertopType === COUNTERTOP_TYPES_ENUM.G_TYPE}
        />
        <Field
          name="bLength"
          component={NumberInput}
          label="Длина Б"
          fluid
          required={countertopType === COUNTERTOP_TYPES_ENUM.G_TYPE}
        />
        <Field
          name="width"
          component={NumberInput}
          label="Ширина"
          fluid
          required={countertopType === COUNTERTOP_TYPES_ENUM.G_TYPE}
        />
        <BaseCheckboxFields isNeedStoneWashing={isNeedStoneWashing} />
      </Col>
      <Col
        className={CALCULATOR_PAGE_CLASS_NAMES.G_COUNTERTOP_TYPE_IMAGE_CLASS_NAME}
        lg="8"
      />
    </Row>
  </Container>
);

const pCounterTopImageFormSection = (countertopType: string, isNeedStoneWashing: boolean) => (
  <Container className={CALCULATOR_PAGE_CLASS_NAMES.CONTERTOP_SIZES_FORM_SECTION_CONTAINER_CLASS_NAME}>
    <Row className={CALCULATOR_PAGE_CLASS_NAMES.CONTERTOP_SIZES_FORM_SECTION_ROW_CLASS_NAME}>
      <Col className={CALCULATOR_PAGE_CLASS_NAMES.CONTERTOP_SIZES_FORM_SECTION_FORM_CONTENT_CLASS_NAME} lg="4">
        <Field
          name="aLength"
          component={NumberInput}
          label="Длина А"
          fluid
          required={countertopType === COUNTERTOP_TYPES_ENUM.P_TYPE}
        />
        <Field
          name="bLength"
          component={NumberInput}
          label="Длина Б"
          fluid
          required={countertopType === COUNTERTOP_TYPES_ENUM.P_TYPE}
        />
        <Field
          name="cLength"
          component={NumberInput}
          label="Длина C"
          fluid
          required={countertopType === COUNTERTOP_TYPES_ENUM.P_TYPE}
        />
        <Field
          name="width"
          component={NumberInput}
          label="Ширина"
          fluid
          required={countertopType === COUNTERTOP_TYPES_ENUM.P_TYPE}
        />
        <BaseCheckboxFields isNeedStoneWashing={isNeedStoneWashing} />
      </Col>
      <Col
        className={CALCULATOR_PAGE_CLASS_NAMES.P_COUNTERTOP_TYPE_IMAGE_CLASS_NAME}
        lg="8"
      />
    </Row>
  </Container>
);

const getMatchingCountertopType = (countertopType: string, isNeedStoneWashing: boolean) => {
  switch (countertopType) {
    case COUNTERTOP_TYPES_ENUM.LINE_TYPE:
      return lineCounterTopImageFormSection(countertopType, isNeedStoneWashing);
    case COUNTERTOP_TYPES_ENUM.G_TYPE:
      return gCounterTopImageFormSection(countertopType, isNeedStoneWashing);
    case COUNTERTOP_TYPES_ENUM.P_TYPE:
      return pCounterTopImageFormSection(countertopType, isNeedStoneWashing);
    default:
      return null;
  }
};

export const firstStepRenderContentFunction = (manufacturersOptions: SelectOptionsType[]) => (
  <Field
    name="manufacturer"
    component={SelectInput}
    placeholder="Выберите производителя"
    fluid
    selection
    options={manufacturersOptions}
  />
);

export const secondStepRenderContentFunction = (seriesOptions: SelectOptionsType[]) => (
  <Field
    name="series"
    component={SelectInput}
    placeholder="Выберите серию камня"
    fluid
    selection
    options={seriesOptions}
  />
);

export const thirdStepRenderContentFunction = () => (
  <React.Fragment>
    {
      map(COUNTERTOP_TYPES, (countertopType: { title: string, image: string, value: string }) => (
        <Field
          key={countertopType.value}
          name="countertopType"
          label={countertopType.title}
          imageLabel={countertopType.image}
          radioValue={countertopType.value}
          component={RadioInput}
        />
      ))
    }
  </React.Fragment>
);

export const fourStepRenderContentFunction = (props: FourStepArgumentsType) => (
  <div className={CALCULATOR_PAGE_CLASS_NAMES.CONTERTOP_SIZES_FORM_SECTION_CONTAINER_WRAPPER_CLASS_NAME}>
    {getMatchingCountertopType(props.countertopType, props.isNeedStoneWashing)}
    {
      props.isNeedWallBoard && (
        <Field
          name="wallBoard"
          component={SelectInput}
          placeholder="Выберите стеновой бортик"
          fluid
          selection
          options={props.wallBoardsOptions}
        />
      )
    }
    {
      props.isNeedEndEdge && (
        <Field
          name="edgeProcess"
          component={SelectInput}
          placeholder="Выберите торцевую кромку"
          fluid
          selection
          options={props.edgeProcessingOptions}
        />
      )
    }
    {
      props.isNeedStoneWashing && (
        <div className={CALCULATOR_PAGE_CLASS_NAMES.BOWLS_CONTAINER_CLASS_NAME}>
          <h2 className={CALCULATOR_PAGE_CLASS_NAMES.BOWLS_TITLE}>Выберите мойку</h2>
          {
            map(props.mainBowls, (mainBowl: BasePriceListType) => (
              <Field
                key={mainBowl.id}
                name="mainBowl"
                label={mainBowl.title}
                imageLabel={mainBowl.image}
                radioValue={mainBowl.id}
                component={RadioInput}
              />
            ))
          }
        </div>
      )
    }
    {
      props.isNeedStoneWashing && props.isNeedAdditionalStoneWashing && (
        <div className={CALCULATOR_PAGE_CLASS_NAMES.BOWLS_CONTAINER_CLASS_NAME}>
          <h2 className={CALCULATOR_PAGE_CLASS_NAMES.BOWLS_TITLE}>Выберите дополнительную мойку</h2>
          {
            map(props.additionalBowls, (additionalBowl: BasePriceListType) => (
              <Field
                key={additionalBowl.id}
                name="additionalBowl"
                label={additionalBowl.title}
                imageLabel={additionalBowl.image}
                radioValue={additionalBowl.id}
                component={RadioInput}
              />
            ))
          }
        </div>
      )
    }
  </div>
);

export const fiveStepRenderContentFunction = (additionalServices: AdditionalServicesType[]) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Вид работ</Table.HeaderCell>
        <Table.HeaderCell collapsing>Стоимость</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        map(additionalServices, (additionalService: AdditionalServicesType) => (
          <Table.Row key={additionalService.id}>
            <Table.Cell verticalAlign="middle">
              <Field
                name={additionalService.systemTitle}
                component={CheckboxInput}
                label={additionalService.title}
              />
              {
                additionalService.additionalOneKilometerPrice && (
                  <React.Fragment>
                    <p>
                      {`Если нужно ехать дальше, то ${additionalService.additionalOneKilometerPrice} рублей за 1 км дополнительного пути.`}
                    </p>
                    <Field
                      name={`${additionalService.systemTitle}.additionalDistance`}
                      component={NumberInput}
                      label="Количество доп. км"
                    />
                  </React.Fragment>
                )
              }
            </Table.Cell>
            <Table.Cell collapsing verticalAlign="middle">
              {`${additionalService.price} ₽`}
            </Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
);

export const totalStepRenderContentFunction = (props: TotalStepArgumentsType) => (
  <Table celled striped>
    <Table.Body>
      <Table.Row>
        <Table.Cell verticalAlign="middle">
          <p>Материал</p>
        </Table.Cell>
        <Table.Cell collapsing verticalAlign="middle">
          <p>{props.manufacturer}</p>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell verticalAlign="middle">
          <p>Стоимость 1 п.м.</p>
        </Table.Cell>
        <Table.Cell collapsing verticalAlign="middle">
          <p>{`${props.series} ₽`}</p>
        </Table.Cell>
      </Table.Row>
      {
        props.cornerProcessingPriceValue !== 0 && (
          <Table.Row>
            <Table.Cell verticalAlign="middle">
              <p>Стоимость обработки углов</p>
            </Table.Cell>
            <Table.Cell collapsing verticalAlign="middle">
              <p>{`${props.cornerProcessingPriceValue} ₽`}</p>
            </Table.Cell>
          </Table.Row>
        )
      }
      <Table.Row>
        <Table.Cell verticalAlign="middle">
          <p>Площадь столешницы</p>
        </Table.Cell>
        <Table.Cell collapsing verticalAlign="middle">
          <p>{`${get(props, ['sizes', 'area'])} кв.м.`}</p>
        </Table.Cell>
      </Table.Row>
      {
        props.endEdgePrice !== 0 && (
          <React.Fragment>
            <Table.Row>
              <Table.Cell verticalAlign="middle">
                <p>Длина торцевой кромки</p>
              </Table.Cell>
              <Table.Cell collapsing verticalAlign="middle">
                <p>{`${get(props, ['sizes', 'edgeLength'])} п.м.`}</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="middle">
                <p>Стоимость торцевой кромки</p>
              </Table.Cell>
              <Table.Cell collapsing verticalAlign="middle">
                <p>{`${props.endEdgePrice} ₽`}</p>
              </Table.Cell>
            </Table.Row>
          </React.Fragment>
        )
      }
      {
        props.wallBoardPrice !== 0 && (
          <React.Fragment>
            <Table.Row>
              <Table.Cell verticalAlign="middle">
                <p>Длина стенового бортика</p>
              </Table.Cell>
              <Table.Cell collapsing verticalAlign="middle">
                <p>{`${get(props, ['sizes', 'wallLength'])} п.м.`}</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="middle">
                <p>Стоимость стенового бортика</p>
              </Table.Cell>
              <Table.Cell collapsing verticalAlign="middle">
                <p>{`${props.wallBoardPrice} ₽`}</p>
              </Table.Cell>
            </Table.Row>
          </React.Fragment>
        )
      }
      <Table.Row>
        <Table.Cell verticalAlign="middle">
          <p>Доставка</p>
        </Table.Cell>
        <Table.Cell collapsing verticalAlign="middle">
          <p>{`${props.deliveryPrice} ₽`}</p>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell verticalAlign="middle">
          <p>Монтаж</p>
        </Table.Cell>
        <Table.Cell collapsing verticalAlign="middle">
          <p>{`${props.installationPrice} ₽`}</p>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell verticalAlign="middle">
          <p>Замер</p>
        </Table.Cell>
        <Table.Cell collapsing verticalAlign="middle">
          <p>{`${props.measurementPrice} ₽`}</p>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell verticalAlign="middle">
          <p>Итоговая стоимость</p>
        </Table.Cell>
        <Table.Cell collapsing verticalAlign="middle">
          <p>{`${props.totalSum} ₽`}</p>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
