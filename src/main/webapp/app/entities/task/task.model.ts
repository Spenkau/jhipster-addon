export interface ITask {
  id: number;
  name?: string | null;
  categoryId?: string | null;
}

export type NewTask = Omit<ITask, 'id'> & { id: null };
