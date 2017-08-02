
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { Component, OnInit  } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor(
    private authAf: AngularFireAuth,
    private router: Router,
    public proService: ProductService) {
    this.authAf.authState.subscribe((user) => {
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  
  }

 

}
