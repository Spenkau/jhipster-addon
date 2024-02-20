import { ITask } from '../entities/task/task.model';
import { ICategory } from '../entities/category/category.model';
import { combineReducers } from '@ngrx/store';
import { taskReducer } from './task/task.reducer';
import { categoryReducer } from './category/category.reducer';

export interface State {
  tasks: ITask[];
  categories: ICategory[];
}

export const initialState: State = {
  tasks: [],
  categories: [],
};

export const rootReducer = combineReducers({
  tasks: taskReducer,
  categories: categoryReducer,
});
