import { createSelector } from '@ngrx/store';
import { ITask } from '../../entities/task/task.model';
import { State } from '../app.reducer';

export const selectTasks = createSelector(
  (state: State) => state.tasks,
  (tasks: ITask[]) => tasks,
);
