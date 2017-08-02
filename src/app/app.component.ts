import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private authAf: AngularFireAuth,
    private router: Router
  ) { 
    this.authAf.authState.subscribe(
      (user) => {
        if(user){
          this.router.navigate(['/home']);
        }
        else{
          this.router.navigate(['/login'])
        }
      }
    )
  }

  ngOnInit() {
  }

  

}