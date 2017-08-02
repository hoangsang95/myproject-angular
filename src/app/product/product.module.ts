import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductRouting } from './product-routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterProductPipe } from './filter-product.pipe';
import { HeaderModule } from './../header/header.module';

@NgModule({
    declarations: [
        ProductComponent,
        ListProductComponent,
        EditProductComponent,
        FilterProductPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProductRouting,
        ReactiveFormsModule,
        HeaderModule
    ]
})
export class ProductModule{}