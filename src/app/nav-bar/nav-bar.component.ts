import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../services/shopping-cart-service';
import { AuthService } from '../services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  totalQuantity: number = 0;
  isLoggedIn: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.totalQuantity$.subscribe(
      (totalQuantity: number) => {
        this.totalQuantity = totalQuantity;
      }
    );
    this.authService.userDataChanged.subscribe(user => {
      this.isLoggedIn = !!user;  
    });

    this.isLoggedIn = !!this.authService.userData;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']); 
  }
}
