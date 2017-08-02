import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';
import { ProductAnimation } from '../animations';
import { CategorySerive } from '../../category/category.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  animations: [
    ProductAnimation
  ]
})
export class ListProductComponent implements OnInit {
  @HostBinding('@productState') productState = true;
  products: ProductModel[] = [];
  filterString: string = '';
  selectDefault = [
    { id: 1, name: 'Product Code' },
    { id: 2, name: 'Product Name' },
    { id: 3, name: 'Product Category' },
  ];
  typeSearch: number = 1;

  constructor(
    private proService: ProductService,
    private cateService: CategorySerive
  ) { }

  ngOnInit() {
    this.products = this.proService.getProducts();
    this.proService.changeProducts.subscribe(
      (products: ProductModel[]) => {
        this.products = products;
      }
    );

  }

  getProductCategoryName(key) {
    const categories = this.cateService.getCategories();
    try {
      var result = categories.filter(function (obj) {
        return obj.id === parseInt(key);
      })[0].category_name;
      return result
    }
    catch (e) { }

  }

  onDelete(index: number, productId: number) {
    this.proService.deleteProduct(index);
    var query = firebase.database().ref().child('product').orderByChild('id').equalTo(productId);
    query.on('child_added', function (snapshot) {
      snapshot.ref.remove();
    })
  }

}
