// @flow

export type CatalogViewTypes = "range" | "slider" | "grid";

export type ProductPhotoType = {
  id: string,
  photo: string,
};

export type ProductCardsType = {
  id: string,
  image: string,
  title: string,
  price: string,
  description: string,
  category: string,
  photos: ProductPhotoType[],
};

export type ProductCardsStateType = {
  productCards: ProductCardsType[],
  filterMethod: string,
};
