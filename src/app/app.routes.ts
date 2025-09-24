import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
    {
        path:"", 
        component:Main
    }, 
    {
        path:"cart", 
        component:Cart
    }
];
