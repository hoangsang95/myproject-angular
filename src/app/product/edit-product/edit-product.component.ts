import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategorySerive } from '../../category/category.service';
import { CategoryModel } from '../../category/category.model';
import { ProductAnimation } from '../animations';
import { StoreFirebaseService } from '../../share/store-firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  animations: [
    ProductAnimation
  ]
})
export class EditProductComponent implements OnInit {
  @HostBinding('@productState') productState = true;
  productForm: FormGroup;
  modeForm: boolean;
  id: number;
  categories: CategoryModel[] = [];
  title: string = 'Add Product'

  constructor(
    private proService: ProductService,
    private route: ActivatedRoute,
    private cateService: CategorySerive,
    private router: Router,
    private fbService: StoreFirebaseService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.modeForm = params['id'] != null;
        this.title = 'Edit Product';
      }
    );
    
    this.categories = this.cateService.getCategories();

    this.initForm();
    
  }

  onSubmit(){
    if(this.modeForm){
      var refProduct = firebase.database().ref().child('product');
      var query = refProduct.orderByChild('id').equalTo(this.productForm.get('id').value);
      query.on('child_added', (snapshot) => {
        snapshot.ref.update(this.productForm.value);
      });
      this.proService.editProduct(this.id,this.productForm.value);
    }
    else{
      this.proService.addProduct(this.productForm.value);
      this.fbService.storeProduct(this.productForm.value);
    }
    this.router.navigate(['/product']);
    console.log(this.productForm.value);
  }

  initForm(){
    let id = this.proService.autoCreateId();
    let product_code = '';
    let product_name = '';
    let prouduct_category: number = 1;

    if(this.modeForm){
      const product = this.proService.getProduct(this.id);
      id = product.id;
      product_code = product.product_code;
      product_name = product.product_name;
      prouduct_category = product.product_category;

    }

    this.productForm = new FormGroup({
      id: new FormControl(id),
      product_code: new FormControl(product_code, Validators.required),
      product_name: new FormControl(product_code, Validators.required),
      product_category: new FormControl(prouduct_category, Validators.required),
    })
  }
}
