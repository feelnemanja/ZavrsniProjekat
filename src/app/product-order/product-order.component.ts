import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/shopping-cart-service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './product-order.component.html',
  styleUrl: './product-order.component.css'
})
export class ProductOrderComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private router: Router,
  ) { }


  productOrderForm: FormGroup;

  
  ngOnInit(): any {
    this.productOrderForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, Validators.required),
      'adress': new FormControl(null, Validators.required),
      'comment': new FormControl(null),
      'payment': new FormControl(null, Validators.required),
    })
  }
  onSubmit() {
    if (this.productOrderForm.valid) {
      console.log(this.productOrderForm.value);
      this.productOrderForm.reset();
      this.clearCart();
    }
    else{
      this.productOrderForm.markAllAsTouched();
      alert("Please fill up form as its shown");
    }
  }

  clearCart() {
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}