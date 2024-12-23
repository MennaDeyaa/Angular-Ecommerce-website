import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomdataService {

  constructor(private _HttpClient:HttpClient) { }

  gettingProducts():Observable<any>{
     return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  gettingdetails(id:string):Observable<any>{
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  gettingcategories():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
}
