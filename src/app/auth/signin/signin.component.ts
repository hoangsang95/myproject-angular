import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthAnimation } from './../auth-animation';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [
    AuthAnimation
  ]
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private authAf: AngularFireAuth, private router: Router) {
    this.authAf.authState.subscribe((user) => {
      if (user) {
        this.router.navigate(['/home']);
      }
      else{
        this.router.navigate(['/login']);
      }
     
    });
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.authService.loginNormal(form.value.email, form.value.password);
  }

  loginFacebook() {
    this.authService.loginFacebook();
  }

  loginGoogle(){
    this.authService.loginGoogle();
  }

}
