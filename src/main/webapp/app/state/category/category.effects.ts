import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EntityArrayResponseType, TaskService } from '../../entities/task/service/task.service';
import { loadCategories } from './category.actions';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITask } from '../../entities/task/task.model';

@Injectable()
export class CategoryEffects {
  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategories),
      switchMap(payload => {
        return this.taskService.query(payload).pipe(
          map((response: EntityArrayResponseType) => {
            return loadCategories({ payload: { categories: response } });
          }),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
  ) {}
}
