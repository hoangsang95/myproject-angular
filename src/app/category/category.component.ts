import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorySerive } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private authAf: AngularFireAuth,
    private router: Router,
    public cateService: CategorySerive
  ) {
    this.authAf.authState.subscribe((user) => {
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  }

}
