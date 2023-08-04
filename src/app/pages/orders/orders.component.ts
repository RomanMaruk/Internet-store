import { Component } from '@angular/core';
import { BehaviorSubject, of, Subject, tap } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  constructor(private shop: ShopService) {}

  products$ = this.shop.productsToBuy$.pipe(tap((p) => this.sumOrders(p)));
  totalPrice$ = new BehaviorSubject<number>(0);

  sumOrders(products: IProduct[]) {
    const totalPrice = products.reduce(
      (sum, p) => ({ price: sum.price + p.price }),
      {
        price: 0,
      }
    ).price;
    this.totalPrice$.next(totalPrice);
  }
}
