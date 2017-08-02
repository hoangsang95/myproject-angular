import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './home/home/home.component';



const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: SigninComponent, },
    { path: 'home', component: HomeComponent },
    { path: 'product', loadChildren: './product/product.module#ProductModule', },
    { path: 'category', loadChildren: './category/category.module#CategoryModule', },
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class AppRouting{}