import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: IProduct[], search = ''): IProduct[] {
    if (!search.trim()) {
      return products;
    }

    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
