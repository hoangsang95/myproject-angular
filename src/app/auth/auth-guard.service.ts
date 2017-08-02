import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export  class AuthGuardService implements CanActivate{
    constructor(
        private authService: AuthService, 
        private router: Router,
        private authAf: AngularFireAuth
    ){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        return this.authService.isAuthenticated()
    }

}