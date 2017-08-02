import { Pipe, PipeTransform } from '@angular/core';
import { CategorySerive } from '../category/category.service';

@Pipe({
  name: 'filterProduct',
  pure: false,
})
export class FilterProductPipe implements PipeTransform {
  constructor(private cateService: CategorySerive) {

  }

  transform(arr: any, filterSearch: string, typeSearch: number): any {
    if (filterSearch == null) {
      return null
    }

    if (typeSearch == 1) {
      return arr.filter((item) => {
        return item.product_code.toLowerCase().includes(filterSearch.toLowerCase())
      });
    }

    if (typeSearch == 2) {
      return arr.filter((item) => {
        return item.product_name.toLowerCase().includes(filterSearch.toLowerCase());
      });
    }

    if (typeSearch == 3) {

      if (filterSearch != '') {
        const categories = this.cateService.getCategories();
        try {
          var result = categories.filter((item) => {
            return item.category_name.toLowerCase() === filterSearch.toLowerCase();
          })[0].id;
          return arr.filter((item) => {
            return item.product_category == result;
          })
        }
        catch (e) {
        }
      }
      else {
        return arr;
      }

    }



  }

}
