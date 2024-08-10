import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/Post';
import { CartService } from '../services/shopping-cart-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-shoping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './shoping-cart.component.html',
  styleUrl: './shoping-cart.component.css'
})
export class ShopingCartComponent {

  items = this.cartService.getItems();
  quantity: number = 0;

  constructor(private cartService: CartService) { }

  updateQuantity(item: { product: Product, quantity: number }) {
    this.cartService.updateQuantity(item.product, item.quantity);
  }

  removeItem(product: Product) {
    this.cartService.removeItem(product);
  }

  calculateSubtotal(): number {
    return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  calculateShipping(): boolean {
    const subtotal = this.calculateSubtotal();
    return subtotal >= 100;
  }

  calculateShippingLabel(): string {
    return this.calculateShipping() ? 'FREE' : '100$';
  }

  calculateTotal(): number {
    const subtotal = this.calculateSubtotal();
    const shipping = this.calculateShipping() ? 0 : 100;
    return subtotal + shipping;
  }

}