import { Component, Input } from '@angular/core';
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
}
