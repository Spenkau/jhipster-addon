import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: 30425,
};

export const sampleWithPartialData: ICategory = {
  id: 7239,
  slug: 'separately bush',
};

export const sampleWithFullData: ICategory = {
  id: 5324,
  name: 'bucket',
  slug: 'often hopelessly',
};

export const sampleWithNewData: NewCategory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
