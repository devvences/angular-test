import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private httpClient: HttpClient) { }

  addItem(product: Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
  }

  getShippingPrices(){
    return this.httpClient.get<type: String, price: number>('jkkjl');
  }
}
