import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:Product[],text:string): Product[] {
    return products.filter(product => 
      product.title.toLowerCase().includes(text.toLowerCase())
    );
  }

}
