import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  CartNum:BehaviorSubject<number>=new BehaviorSubject(0);

  headersvalue:any ={token:localStorage.getItem('eToken')}

  constructor(private _HttpClient:HttpClient) { }

  addTOcart(productId:string):Observable<any>{
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {productId:productId},{headers:this.headersvalue});
  }
  getcart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:this.headersvalue});
  }
  deleteItemfromCart(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {headers:this.headersvalue}
    )
  }
  changecount(productId:string,newcount:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        count:newcount
      },{headers:this.headersvalue}
    )
  }
  
}
