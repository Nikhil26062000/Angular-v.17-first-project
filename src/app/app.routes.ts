import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { AddEmployeeComponent } from '../pages/add-employee/add-employee.component';
import { EmployeeListComponent } from '../pages/employee-list/employee-list.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login Page',
  },
  {
    path: 'add-employee',
    loadComponent: () =>
      import('../pages/add-employee/add-employee.component').then(
        (c) => c.AddEmployeeComponent
      ),
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('../pages/employee-list/employee.routes').then((r) => r.routes),
    title: 'List of Employees',
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page not found',
  },
];
