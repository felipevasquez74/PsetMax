import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductosListComponent} from './components/productos-list/productos-list.component';
import {ProductosFormComponent} from './components/productos-form/productos-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductosListComponent
  },
  {
    path: 'productos/add',
    component: ProductosFormComponent

  },
  {
    path: 'productos/edit/:id',
    component: ProductosFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
