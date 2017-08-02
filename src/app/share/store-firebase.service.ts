import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { CategoryModel } from '../category/category.model';

@Injectable()
export class StoreFirebaseService {

  constructor(private http: Http, private proService: ProductService) { }

  storeCategory(category: CategoryModel) {
    this.http.post('https://angular-project-ecd34.firebaseio.com/category.json', category)
      
  }

  storeProduct(product: ProductModel) {
    this.http.post('https://angular-project-ecd34.firebaseio.com/product.json', product)
    
  }

}
