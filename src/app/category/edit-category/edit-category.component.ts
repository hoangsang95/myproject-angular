import { StoreFirebaseService } from './../../share/store-firebase.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, HostBinding, OnInit } from '@angular/core';
import { CategorySerive } from '../category.service';
import { slideInDownAnimation } from '../animations';
import * as firebase from 'firebase';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
  animations: [
    slideInDownAnimation
  ]
})
export class EditCategoryComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  
  categoriesForm: FormGroup;
  formMode = false;
  id: number;
  title: string = 'New Category';

  constructor(
    private route: ActivatedRoute,
    private cateService: CategorySerive,
    private router: Router,
    private fbService: StoreFirebaseService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.formMode = params['id'] != null;
      }
    );
    this.initForm();
  }

  onSubmit(){
    if(this.formMode){
      var refCategory = firebase.database().ref().child('category');
      var query = refCategory.orderByChild(this.categoriesForm.get('id').value);
      query.on('child_added', (snapshot) => {
        snapshot.ref.update(this.categoriesForm.value);
      })
      this.cateService.editCategory(this.id, this.categoriesForm.value)
    }
    else{
      this.cateService.addCaterory(this.categoriesForm.value);
      this.fbService.storeCategory(this.categoriesForm.value);
    }
    this.router.navigate(['/category']);
    
  }

  initForm(){
    let id = this.cateService.autoCreateId();
    let category_code = '';
    let category_name = '';

    if(this.formMode){
      this.title = 'Edit category'
      const category = this.cateService.categorySelected(this.id);
      id = category.id;
      category_code = category.category_code;
      category_name = category.category_name;
    }

    this.categoriesForm = new FormGroup({
      id: new FormControl(id, Validators.required),
      category_code: new FormControl(category_code, Validators.required),
      category_name: new FormControl(category_name, Validators.required)
    })
  }

  onCancle(){
    this.router.navigate(['/category'])
  }


}
