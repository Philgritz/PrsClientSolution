import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../prs/product/product.class';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string = ''): Product[] {
    if(searchCriteria == '') { return products;}
    let substr = searchCriteria.toLowerCase();
    let selectedProducts: Product[] = [];
    for(let product of products) {
      if(product.id.toString().includes(substr)
      || product.name.toLowerCase().includes(substr)
      || product.partNbr.toLowerCase().includes(substr)
      || product.unit.toLowerCase().includes(substr)
      ) {
        selectedProducts.push(product);
        continue;
      }
    }
    return selectedProducts;
  }

}
