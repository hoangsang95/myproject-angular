import { CategoryRouting } from './category-routing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ListCategoryComponent } from './list-category/list-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ProductOfCategoryComponent } from './product-of-category/product-of-category.component';
import { CategoryComponent } from './category.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
    declarations: [
        CategoryComponent,
        ListCategoryComponent,
        EditCategoryComponent,
        ProductOfCategoryComponent,
    ],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        CategoryRouting,
        HeaderModule
    ]
})

export class CategoryModule{}