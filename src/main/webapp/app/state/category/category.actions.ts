import { createAction, props } from '@ngrx/store';
import { ICategory } from '../../entities/category/category.model';

export const loadCategories = createAction('[Category] Load Categories', props<{ payload: any }>());

export const createCategory = createAction('[Category] Create Categories', props<{ payload: ICategory }>());
