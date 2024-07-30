import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../modals/Post';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: { product: Product, quantity: number }[] = [];
  private totalQuantitySubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalQuantity$ = this.totalQuantitySubject.asObservable();

  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += product.quantity || 1;
    } else {
      this.items.push({ product: product, quantity: product.quantity || 1 });
    }

    this.calculateTotalQuantity();
  }

  updateQuantity(product: Product, newQuantity: number) {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity = newQuantity;
      this.calculateTotalQuantity();
    }
  }

  removeItem(product: Product) {
    const index = this.items.findIndex(item => item.product.id === product.id);

    if (index !== -1) {
      this.items.splice(index, 1);
      this.calculateTotalQuantity();
    }
  }

  clearCart() {
    this.items = [];
    this.calculateTotalQuantity();
  }


  private calculateTotalQuantity() {
    const totalQuantity = this.items.reduce((total, item) => total + item.quantity, 0);
    this.totalQuantitySubject.next(totalQuantity);
  }

  getItems() {
    return this.items;
  }

  getTotalQuantity() {
    return this.totalQuantitySubject.value;
  }
}



