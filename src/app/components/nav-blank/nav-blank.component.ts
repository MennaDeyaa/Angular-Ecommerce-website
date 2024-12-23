import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit{
  cartnum:number=0; 
  constructor(private _AuthService:AuthService,private _CartService:CartService){}
  Logingout():void{
     this._AuthService.UserLogOut();
  }
  ngOnInit(): void {
   this._CartService.CartNum.subscribe({
     next:(numb)=>{
      this.cartnum=numb}

    })
    this._CartService.getcart().subscribe({
      next:(res)=>{this._CartService.CartNum.next(res.numOfCartItems)},
    })
  }
}
