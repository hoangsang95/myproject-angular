import { Subject } from 'rxjs/Subject';
import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { StoreFirebaseService } from '../share/store-firebase.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService implements OnInit {
    isLoading = true;
    changeProducts = new Subject<ProductModel[]>();
    products: ProductModel[] = [
        // new ProductModel(1, 'Pro1', 'Iphone', 1),
        // new ProductModel(2, 'Pro2', 'IPad', 1),
        // new ProductModel(3, 'Pro3', 'Nokia', 3),
        // new ProductModel(4, 'Pro4', 'Galaxy S8', 2),
    ];

    constructor(private http: Http) {
        this.fetchProduct()
    }

    ngOnInit() { }

    fetchProduct() {
        return this.http.get('https://angular-project-ecd34.firebaseio.com/product.json/')
            .map((response: Response) => {
                return response.json();
            })
            .subscribe(
            (products: any) => {
                var resultArr = [];
                for (let item in products) {
                    resultArr.push(products[item]);
                }
                console.log(resultArr);
                this.products = resultArr;
                this.changeProducts.next(this.products);
                setTimeout(() =>{
                    this.isLoading = false
                }, 2500);
                    
            }
            )
    }

    getProducts() {
        return this.products.slice();
    }

    getProduct(id: number) {
        return this.products[id];
    }

    addProduct(product: ProductModel) {
        this.products.push(product);
    }

    editProduct(id: number, product: ProductModel) {
        this.products[id] = product;
    }

    deleteProduct(id: number) {
        this.products.splice(id, 1);
        this.changeProducts.next(this.products);
    }

    setProducts(products: ProductModel[]) {
        this.products = products;
    }

    autoCreateId() {
        var arrId = [];
        if (this.products.length > 0) {
            for (let item of this.products) {
                arrId.push(item['id'])
            }
            return Math.max(...arrId) + 1;
        }
        else {
            return arrId.push(1);
        }

    }
}