import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRouting } from './app-routing';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CategorySerive } from './category/category.service';
import { ProductService } from './product/product.service';
import { StoreFirebaseService } from './share/store-firebase.service';
import { HomeComponent } from './home/home/home.component';
import { HeaderModule } from './header/header.module';



export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDRd-TkNKhC9dmcH_dPnVDLd1gk-Odk7kg",
    authDomain: "angular-project-ecd34.firebaseapp.com",
    databaseURL: "https://angular-project-ecd34.firebaseio.com",
    projectId: "angular-project-ecd34",
    storageBucket: "angular-project-ecd34.appspot.com",
    messagingSenderId: "357146102737"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    CategoryModule,
    ProductModule,
    AppRouting,
    HeaderModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    StoreFirebaseService,
    AuthService, 
    AuthGuardService, 
    AngularFireAuth, 
    CategorySerive, 
    ProductService, 
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
