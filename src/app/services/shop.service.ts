import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private productsToBuy = new BehaviorSubject<IProduct[]>([]);
  public productsToBuy$ = this.productsToBuy.asObservable();

  constructor() {}

  getAllProducts(): Observable<IProduct[]> {
    return of(PRODUCTS);
  }

  set setProductsToBuy(product: IProduct) {
    const products = this.productsToBuy.getValue();
    const isExist = products.some((p) => p.id === product.id);
    if (isExist) return;
    products.push(product);
    this.productsToBuy.next(products);
  }

  removeProductFromBuy(idProduct: string) {
    const products = this.productsToBuy.getValue();
    const filteredProducts = products.filter((p) => p.id !== idProduct);
    this.productsToBuy.next(filteredProducts);
  }
}

const PRODUCTS = [
  {
    id: '76w0hz7015kkr9kjka3v',
    images: [
      'https://content2.rozetka.com.ua/goods/images/big_tile/178060660.jpg',
      'https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg',
    ],
    title: 'Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black',
    rating: 2.89,
    price: 15999,
    category: 'laptops',
    brand: 'acer',
  },
  {
    id: 'qeagrlm9lrk3r9kjkav',
    images: [
      'https://content1.rozetka.com.ua/goods/images/big_tile/178060622.jpg',
      'https://content2.rozetka.com.ua/goods/images/big_tile/178060625.jpg',
    ],
    title: 'Ноутбук Acer Aspire 7 A715-41G-R9KP (NH.Q8QEU.00L) Charcoal Black',
    rating: 1.96,
    price: 21500,
    category: 'laptops',
    brand: 'acer',
  },
  {
    id: '0y93ksratv6akr9kjkav',
    images: [
      'https://content2.rozetka.com.ua/goods/images/big_tile/178060660.jpg',
      'https://content1.rozetka.com.ua/goods/images/big_tile/178060662.jpg',
    ],
    title: 'Ноутбук Acer Aspire 7 A715-75G-51ZW (NH.Q88EU.00P) Charcoal Black',
    rating: 2.42,
    price: 22999,
    category: 'laptops',
    brand: 'acer',
  },
  {
    id: 'cvr29ca4okhhkr9kjkav',
    images: [
      'https://content1.rozetka.com.ua/goods/images/big_tile/25101152.jpg',
      'https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg',
    ],
    title:
      'Ноутбук Acer Nitro 5 AN515-55-56WH (NH.Q7PEU.00L) Obsidian Black Суперцена!!!',
    rating: 0.53,
    price: 28999,
    category: 'laptops',
    brand: 'acer',
  },
  {
    id: 'k9hb29sfe5ekr9kjkav',
    images: [
      'https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg',
      'https://content1.rozetka.com.ua/goods/images/big_tile/24790127.jpg',
    ],
    title: 'Ноутбук Acer Aspire 7 A715-75G-57LR (NH.Q87EU.006) Charcoal Black',
    rating: 3.2,
    price: 22500,
    category: 'laptops',
    brand: 'acer',
  },
  {
    id: '76w0hz70154kkr9kjkav',
    images: [
      'https://content2.rozetka.com.ua/goods/images/big_tile/178060660.jpg',
      'https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg',
    ],
    title: 'Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black',
    rating: 2.89,
    price: 15999,
    category: 'laptops',
    brand: 'acer',
  },
  {
    id: 'qeagrlm39lrkr9kjkav',
    images: [
      'https://content1.rozetka.com.ua/goods/images/big_tile/178060622.jpg',
      'https://content2.rozetka.com.ua/goods/images/big_tile/178060625.jpg',
    ],
    title: 'Ноутбук Acer Aspire 7 A715-41G-R9KP (NH.Q8QEU.00L) Charcoal Black',
    rating: 1.96,
    price: 21500,
    category: 'laptops',
    brand: 'acer',
  },
  {
    id: '0y9ksrat6v6akr9kjkav',
    images: [
      'https://content2.rozetka.com.ua/goods/images/big_tile/178060660.jpg',
      'https://content1.rozetka.com.ua/goods/images/big_tile/178060662.jpg',
    ],
    title: 'Ноутбук Acer Aspire 7 A715-75G-51ZW (NH.Q88EU.00P) Charcoal Black',
    rating: 2.42,
    price: 22999,
    category: 'laptops',
    brand: 'acer',
  },
  {
    id: 'cvr29caok3hhkr9kjkav',
    images: [
      'https://content1.rozetka.com.ua/goods/images/big_tile/25101152.jpg',
      'https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg',
    ],
    title:
      'Ноутбук Acer Nitro 5 AN515-55-56WH (NH.Q7PEU.00L) Obsidian Black Суперцена!!!',
    rating: 0.53,
    price: 28999,
    category: 'laptops',
    brand: 'acer',
  },
  {
    id: 'k9hb29s3feekr9kjkav',
    images: [
      'https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg',
      'https://content1.rozetka.com.ua/goods/images/big_tile/24790127.jpg',
    ],
    title: 'Ноутбук Acer Aspire 7 A715-75G-57LR (NH.Q87EU.006) Charcoal Black',
    rating: 3.2,
    price: 22500,
    category: 'laptops',
    brand: 'acer',
  },
];
