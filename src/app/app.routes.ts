import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './category/category.component';

import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
    { path: 'shop', component: ShopComponent, data: { breadcrumb: 'Shop'},
        children: [
            { path: '', redirectTo: 'sympathy', pathMatch: 'full' }, 
            { path: ':status', component: CategoryComponent, data: { breadcrumb: ':status' } } 
          ]
    },
    { path: 'product/:id', component: ProductComponent },
    
]
