import { createAction, props } from '@ngrx/store';
import { ITask } from '../../entities/task/task.model';

export const loadTasks = createAction('[Task] Load Tasks', props<{ payload: any }>());

export const createTask = createAction('[Task] Create Task', props<{ payload: ITask }>());
