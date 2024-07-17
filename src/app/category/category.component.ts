import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddProductService } from '../add-product.service';
import { Product } from '../modals/Post';
import { ShopComponent } from '../shop/shop.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ShopComponent, CommonModule, RouterModule],
    templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  
  products: Product[] = [];
  statuses: { name: string, imgSrc: string }[] = [];
  status: string = '';
  selectedStatus: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: AddProductService
  ) {}
  
  navigateToProduct(product: Product): void {
    // Use Router to navigate without updating the browser's URL visibly
    this.router.navigate(['/shop', product.status, product.title], { skipLocationChange: true });}


  ngOnInit(): void {
    this.statuses = this.productService.statuses;
    
    // Subscribe to route parameter changes to update selectedStatus
    this.route.paramMap.subscribe(params => {
      const status = params.get('status');
      if (status) {
        this.selectedStatus = status;
        this.loadProductsByStatus(status);
      }
    });
  }

  selectAccountByStatus(status: string) {
    if (status === this.selectedStatus) {
      return;
    }

    // Update URL to reflect the selected status
    this.router.navigate(['/shop', status]);

    // Update selected status and load products
    this.selectedStatus = status;
    this.loadProductsByStatus(status);
  }

  public loadProductsByStatus(status: string) {
    this.products = this.productService.getProductsByStatus(status);
  }

}