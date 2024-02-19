import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 10282,
};

export const sampleWithPartialData: ITask = {
  id: 11053,
  name: 'yowza overconfidently that',
  categoryId: 'except',
};

export const sampleWithFullData: ITask = {
  id: 24102,
  name: 'playfully repeatedly',
  categoryId: 'wildcat trip concerned',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
