// @flow
import {
  ProductCards,
  Comments,
  PriceList,
  Textures,
} from './stubs-constants';

export const getProductCards = (message: string) => {
  if (message) {
    return ProductCards;
  }
  return null;
};

export const getComments = (message: string) => {
  if (message) {
    return Comments;
  }
  return null;
};

export const getPriceList = (message: string) => {
  if (message) {
    return PriceList;
  }
  return null;
};

export const getTextures = (message: string) => {
  if (message) {
    return Textures;
  }
  return null;
};
