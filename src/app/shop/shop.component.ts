import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../services/add-product.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { Product } from '../modals/Post';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CategoryComponent, CommonModule, RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  constructor(

  ) { }

}

