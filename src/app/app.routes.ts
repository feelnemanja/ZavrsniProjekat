import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './category/category.component';

import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './services/auth-guard.guard';



export const routes: Routes = [
    { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
    { path: 'shop', component: ShopComponent, data: { breadcrumb: 'Shop'},
        children: [
            { path: '', redirectTo: 'sympathy', pathMatch: 'full' }, 
            { path: ':status', component: CategoryComponent, data: { breadcrumb: ':status' } } 
          ]
    },
    { path: 'product/:id', component: ProductComponent },
    { path: 'login', component: LogInComponent},
    { path: 'signup', component: SignUpComponent},
    { path: 'shoppingcart', component: ShopingCartComponent, canActivate:[authGuard]},
    { path: 'productorder', component: ProductOrderComponent},
    { path: 'about', component: AboutComponent},
    
]
