import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-card-product[product]',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent {
  @Input() product!: IProduct;
}
