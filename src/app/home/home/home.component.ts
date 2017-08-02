import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit, HostBinding } from '@angular/core';
import { HomeAnimation } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    HomeAnimation
  ]
})
export class HomeComponent implements OnInit {
  userName: string;
  userAvatar: string;
  userPhone: string;


  constructor(private authAf: AngularFireAuth, private router: Router) {
    authAf.authState.subscribe(
      (user) => {
        if (!user) {
          this.router.navigate(['/login']);
        }
        else {
          this.userName = user.displayName;
          this.userAvatar = user.photoURL;
          this.userPhone = user.phoneNumber;
        }
      }
    );
  }

  ngOnInit() {
  }

}
