import { initialState } from '../app.reducer';
import { createReducer, on } from '@ngrx/store';
import { loadCategories } from './category.actions';

export const categoryReducer = createReducer(
  initialState,

  on(loadCategories, (state, { payload }) => ({
    ...state,
    categories: payload.categories,
  })),
);
