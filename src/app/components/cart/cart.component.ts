import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/interfaces/cart';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartvalues:Cart={} as Cart;
  totalPrice:number=0;
  constructor(private _CartService:CartService){}

  RemoveItemFromCart(id:string):void{
    this._CartService.deleteItemfromCart(id).subscribe({
      next:(response)=>{
         //console.log(response)
        this.cartvalues=response
        this.totalPrice=response.data.totalCartPrice;
        this._CartService.CartNum.next(response.numOfCartItems)
      }
      ,
      error:(err)=>{console.log(err)}
    })
  } 

  ngOnInit(): void {
    this._CartService.getcart().subscribe({
      next:(response)=>{
        // console.log(response);
        this.cartvalues=response;
        this.totalPrice=response.data.totalCartPrice;
      },
      error:(err)=>{console.log(err)}
    })
  }
  changecount(productId:string,newcount:number):void{
    if(newcount>0){
      this._CartService.changecount(productId,newcount).subscribe({
        next:(response)=>{
           console.log(response)
          this.cartvalues=response
          this.totalPrice=response.data.totalCartPrice;

        }, 
        error:(err)=>{console.log(err)}
       })
    }
    
  }

}
