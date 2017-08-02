import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'rxjs/Rx';
@Injectable()
export class AuthService {
    isLogIn: boolean;

    constructor(
        private authAf: AngularFireAuth,
        private router: Router,
    ) {
        this.isAuthenticated();
    }

    loginNormal(email: string, password: string){
        this.authAf.auth.signInWithEmailAndPassword(email, password)
            .then(
                (success) => {
                    this.router.navigate(['/home']);
                }
            );
    }

    loginGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider();
        this.authAf.auth.signInWithPopup(provider)
            .then(
                (success) => {
                    this.router.navigate(['/home']);
                }
            )
    }

    loginFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        this.authAf.auth.signInWithPopup(provider)
            .then((success) => {
                this.router.navigate(['/home']);
            });
    }

    logout() {
        this.authAf.auth.signOut();
        this.router.navigate(['/login']);
    }

    isAuthenticated() {
        return Observable.create(() => {
            this.authAf.authState.subscribe((user) => {
                if(user){
                    return Observable.of(true);
                }
                else{
                    return  Observable.of(false);
                }
            })
        })
        
        
    }
}