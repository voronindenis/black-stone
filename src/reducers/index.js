// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { CATALOG_STORE_KEY, catalogReducer } from '@/modules/catalog';
import type { ProductCardsStateType } from '@/modules/catalog';
import { COMMENTS_STORE_KEY, commentsReducer } from '@/modules/comments-slider';
import type { CommentsStateType } from '@/modules/comments-slider';
import { BLOCKING_REQUESTS_LOADER_STORE_KEY, blockingRequestsLoaderReducer } from '@/modules/blocking-loader';
import { PRICE_LIST_PAGE_STORE_KEY, priceListReducer } from '@/modules/price-list';
import type { PriceListStateType } from '@/modules/price-list';
import { TEXTURES_PAGE_STORE_KEY, texturesReducer } from '@/pages/textures-page';
import type { TexturesStateType } from '@/pages/textures-page';

export type ApplicationStateTypes = {
  'catalog': ProductCardsStateType,
  'blocking-requests-loader': { [key: string]: boolean },
  'comments': CommentsStateType,
  'price-list': PriceListStateType,
  'textures': TexturesStateType,
  'form': Object,
};

export const rootReducer = combineReducers({
  form: formReducer,
  [CATALOG_STORE_KEY]: catalogReducer,
  [BLOCKING_REQUESTS_LOADER_STORE_KEY]: blockingRequestsLoaderReducer,
  [COMMENTS_STORE_KEY]: commentsReducer,
  [PRICE_LIST_PAGE_STORE_KEY]: priceListReducer,
  [TEXTURES_PAGE_STORE_KEY]: texturesReducer,
});
