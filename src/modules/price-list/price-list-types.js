// @flow

export type BasePriceListType = {
  id: string,
  price: string,
  title: string,
  image: string,
};

export type PriceListValuesType = {
  series: string,
  price: string,
};

export type ManufacturersPriceListType = {
  id: string,
  title: string,
  image: string,
  priceListValues: PriceListValuesType[],
};

export type BowlsPriceListType = {
  mainBowls: BasePriceListType[],
  additionalBowls: BasePriceListType[],
};

export type AdditionalServicesType = {
  id: string,
  price: string,
  title: string,
  systemTitle: string,
  additionalOneKilometerPrice?: string,
};

export type ServicesPriceListType = {
  cornerProcessing: string,
  installation: string,
  wallBoards: BasePriceListType[],
  edgeProcessing: BasePriceListType[],
  additionalServices: AdditionalServicesType[],
};

export type PriceListType = {
  servicesPriceList?: ServicesPriceListType,
  bowlsPriceList?: BowlsPriceListType,
  manufacturersPriceList?: ManufacturersPriceListType[],
};

export type PriceListStateType = {
  priceList: PriceListType,
};

export type SubspeciesOfWorksType = {
  id: string,
  text: string,
};

export type PriceForWorksType = {
  id: string,
  text: string,
  subspecies: SubspeciesOfWorksType[],
};
