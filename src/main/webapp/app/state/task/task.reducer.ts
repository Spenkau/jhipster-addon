import { initialState } from '../app.reducer';
import { createReducer, on } from '@ngrx/store';
import { loadTasks } from './task.actions';

export const taskReducer = createReducer(
  initialState,

  on(loadTasks, (state, { payload }) => ({
    ...state,
    tasks: payload.tasks,
  })),
);
