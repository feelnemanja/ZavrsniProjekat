import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/Post';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { AddProductService } from '../add-product.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


  export class ProductComponent implements OnInit {
  products: Product[] = [];
  product: Product | undefined;
  status: string = '';
  currentIndex: number = 0;
  breadcrumbs: { label: string, url: string }[] = [];

    
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private productService: AddProductService
    ) {}
  
    ngOnInit(): void {
      this.products = this.productService.getAllProducts();

    this.route.params.subscribe((params: Params) => {
      const productId = +params['id'];
      this.product = this.productService.getProductById(productId);
      this.currentIndex = this.products.findIndex(p => p.id === productId);

      this.generateBreadcrumbs();
    });
    }
    showProductByName(name: string) {
      this.product = this.productService.getProductByTitle(name);
    }
  
    showNextProduct() {
      if (!this.product) return;

    const nextIndex = (this.currentIndex + 1) % this.products.length;
    this.product = this.products[nextIndex];
    this.currentIndex = nextIndex;
    this.updateRoute(this.product.id);
    this.generateBreadcrumbs();
  }
  
    showPreviousProduct() {
      if (!this.product) return;

    const previousIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
    this.product = this.products[previousIndex];
    this.currentIndex = previousIndex;
    this.updateRoute(this.product.id);
    this.generateBreadcrumbs();
    }
  
    updateRoute(productId: number) {
      this.router.navigate(['/product', productId]);
    }

    generateBreadcrumbs() {
      this.breadcrumbs = [];

      this.breadcrumbs.push({ label: 'Home', url: '' });

      this.breadcrumbs.push({ label: 'Shop', url: 'shop' });
    
      if (this.product?.status) {
        const statusBreadcrumb = this.productService.statuses.find(s => s.status === this.product!.status);
        if (statusBreadcrumb) {
          this.breadcrumbs.push({ label: statusBreadcrumb.name, url: `shop${statusBreadcrumb.status}` });
        }
      }
    
      if (this.product) {
        this.breadcrumbs.push({ label: this.product.title, url: `shop${this.product.status}${this.product.title}` });
      }
    }
  }

  
  
    
  



