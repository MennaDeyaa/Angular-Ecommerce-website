import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserData:any ;

  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  // for registeration
  setRegister(userData : any):Observable<any>{
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userData)
  }
  //for login
  setlogin(userData:object):Observable<any>
  {
     return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userData)
  }
  //for decode the token 
  saveUserData(){
    if(localStorage.getItem('eToken')!=null){
         let encode:any = localStorage.getItem('eToken');
         let decode= jwtDecode(encode); 
         this.UserData=decode;   
         console.log(decode);    
    }
  }
  // for logout 
  UserLogOut(){
    localStorage.removeItem('eToken');
     this._Router.navigate(['/login']);
  }

}
