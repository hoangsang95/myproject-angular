import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
    { path: '', component: ProductComponent, children: [
        { path: '', component: ListProductComponent},
        { path: 'new', component: EditProductComponent},
        { path: 'edit/:id', component: EditProductComponent}
    ]}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProductRouting{}