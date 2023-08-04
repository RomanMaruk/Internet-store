import { Component, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-card-product[product]',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent {
  @Input() product!: IProduct;

  constructor(private shop: ShopService) {}

  addProduct(product: IProduct) {
    this.shop.setProductsToBuy = product;
  }

  remove(idProduct: string) {
    this.shop.removeProductFromBuy(idProduct);
  }

  isToBuy(id: string): Observable<boolean> {
    return this.shop.productsToBuy$.pipe(
      map((p) => p.some((p) => p.id === id))
    );
  }
}
