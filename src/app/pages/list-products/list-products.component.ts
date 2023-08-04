import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent {
  constructor(private shopService: ShopService) {}

  public search = '';

  public products$: Observable<IProduct[]> = this.shopService.getAllProducts();
}
