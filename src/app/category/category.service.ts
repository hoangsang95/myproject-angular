import { Injectable } from '@angular/core';
import { CategoryModel } from './category.model';
import { Subject } from 'rxjs/Subject';
import { ProductService } from '../product/product.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class CategorySerive {
    isLoading = true;
    changeCategories = new Subject<CategoryModel[]>();

    categories: CategoryModel[] = [
        // new CategoryModel(1, 'C1', 'Apple'),
        // new CategoryModel(2, 'C2', 'Samsung'),
        // new CategoryModel(3, 'C3', 'Microsoft'),
    ];

    constructor(private proService: ProductService, private http: Http) {
        this.fetchCategory();
     }

    fetchCategory(){
        this.http.get('https://angular-project-ecd34.firebaseio.com/category.json')
            .map( (response: Response) => {
                return response.json();
            })
            .subscribe(
                (categories: CategoryModel) => {
                    const arrResult = [];
                    for(let category in categories){
                        arrResult.push(categories[category]);
                    }
                    this.categories = arrResult;
                    this.changeCategories.next(this.categories);
                    setTimeout(() => {
                        this.isLoading = false;
                    },2500)
                }
            )
    }

    getCategories() {
        return this.categories.slice();
    }

    addCaterory(category: CategoryModel) {
        this.categories.push(category);
    }

    addCategories(categories: CategoryModel[]) {
        this.categories.push(...categories);
    }

    editCategory(id: number, newCategory: CategoryModel) {
        this.categories[id] = newCategory;
    }

    deleteCategory(id: number) {
        var products = this.proService.getProducts();
        var arrRemove = [];

        for (var i = 0; i <= products.length - 1; i++) {
            if (products[i].product_category == this.categories[id].id) {
                arrRemove.push(i);
            }
        }

        for (var i = arrRemove.length - 1; i >= 0; i--) {
            this.proService.products.splice(arrRemove[i], 1);
        }

        this.categories.splice(id, 1);
        this.changeCategories.next(this.categories);
    }

    categorySelected(id: number) {
        return this.categories[id];
    }

    autoCreateId() {
        var arrId = [];
        if (this.categories.length > 0) {
            for (let item of this.categories) {
                arrId.push(item['id'])
            }
             return Math.max(...arrId) + 1;
        }
        else{
            return arrId.push(1);
        }

       
    }



}