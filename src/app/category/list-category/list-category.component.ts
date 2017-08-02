import { Component, OnInit, HostBinding } from '@angular/core';
import { CategorySerive } from '../category.service';
import { CategoryModel } from '../category.model';
import { cateAnimation, slideInDownAnimation } from '../animations';
import * as firebase from 'firebase';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
  animations:[
    cateAnimation,
    slideInDownAnimation
  ]
})
export class ListCategoryComponent implements OnInit {
 @HostBinding('@routeAnimation') routeAnimation = true;

  categories: CategoryModel[] = [];

  constructor(
    private cateService: CategorySerive,
  ) { }

  ngOnInit() {
    // this.stateAnimation = this.cateService.stateAnimation;
    this.categories = this.cateService.getCategories();
    this.cateService.changeCategories.subscribe(
      (categories: CategoryModel[]) => {
        this.categories = categories;
      }
    );
  }

  onDelete(index: number, cateId: number){
    var refProduct = firebase.database().ref().child('product');
    var queryProduct =  refProduct.orderByChild('product_category').equalTo(cateId);
    queryProduct.on('child_added', (snapshot) => {
      snapshot.ref.remove();
    });

    var refCategory = firebase.database().ref().child('category');
    var queryCategory =  refCategory.orderByChild('id').equalTo(cateId);
    queryCategory.on('child_added', (snapshot) => {
      snapshot.ref.remove();
    });

    this.cateService.deleteCategory(index);
  }

}
