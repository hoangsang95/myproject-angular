import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoryComponent } from './list-category/list-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ProductOfCategoryComponent } from './product-of-category/product-of-category.component';
import { CategoryComponent } from './category.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes: Routes = [
    { path: '', component: CategoryComponent, children: [
        { path: '', component: ListCategoryComponent},
        { path: 'new', component: EditCategoryComponent},
        { path: 'edit/:id', component: EditCategoryComponent},
    ]}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class CategoryRouting{}