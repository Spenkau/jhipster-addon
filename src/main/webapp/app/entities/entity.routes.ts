import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'task',
    data: { pageTitle: 'jhipsterAddonApp.task.home.title' },
    loadChildren: () => import('./task/task.routes'),
  },
  {
    path: 'category',
    data: { pageTitle: 'jhipsterAddonApp.category.home.title' },
    loadChildren: () => import('./category/category.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
