import { Component } from '@angular/core';
import { Tools } from '../../tools';
import { Subscription } from 'rxjs';
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-cart',
  imports: [FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  public cartList:any[]=[]; 
  private cartSibscribtion:Subscription|undefined; 
  constructor (private service:Tools){
    this.loadCartItem()

  }

  loadCartItem(){
    this.cartList=[]; 
    this.cartSibscribtion = this.service.allBaskets().subscribe((data:any[])=>{
      this.cartList = data;
    })

  }

  updateBasket(item:any){

  }

  removeItem(productId:number){
    this.service.removeFromCart(productId).subscribe({
      next:()=>{
        this.loadCartItem()
      }, 
      error:(err)=>{
        console.error("Error", err)
      }
    })
  }

}
