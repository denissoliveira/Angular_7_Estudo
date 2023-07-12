import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent}, // lista as categorias
  { path: 'new', component: CategoryFormComponent}, //cai no formulário pra criar um novo
  { path: ':id/edit', component: CategoryFormComponent} //ele adiciona o id, ex.: site.com/categories/23 ou site.com/categories/23/edit para editar
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
