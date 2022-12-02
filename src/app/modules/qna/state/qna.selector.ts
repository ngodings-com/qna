import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromState from './qna.state';
import * as fromReducer from './qna.reducer';

const productsSelector = createFeatureSelector<fromState.State>(fromReducer.qnaKey);

export const qnas = createSelector(productsSelector, fromReducer.qnas);
export const qnasAll = createSelector(productsSelector, fromReducer.qnasAll);
export const qnasAllTemp = createSelector(productsSelector, fromReducer.qnasAllTemp);
export const totalQNAs = createSelector(productsSelector, fromReducer.totalQNAs);
export const groups = createSelector(productsSelector, fromReducer.groups);