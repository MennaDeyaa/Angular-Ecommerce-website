import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMSG:string='';
  isloading:boolean=false;
  #loginhash:string='';

   constructor(private _AuthService:AuthService,private _Router:Router ,private _FormBuilder:FormBuilder){}

  // loginform:FormGroup=new FormGroup({
  //   email:new FormControl('',[Validators.required,Validators.email]),
  //   password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)])
  // })
  loginform:FormGroup=this._FormBuilder.group({
    email:['' , [Validators.required,Validators.email ]],
    password:['' ,[ Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)]]
  })
   
  onlogin(){
    // console.log(this.loginform);
    this.isloading=true;
    if(this.loginform.valid){
      this._AuthService.setlogin(this.loginform.value).subscribe({
        next:(response)=>{
          if(response.message=='success'){
            // console.log('loginform'+this.loginform.get('email'));
            // console.log('loginhash'+this.#loginhash);
            console.log(response);
          this.isloading=false;
          this._Router.navigate(['/home']);
          localStorage.setItem('eToken',response.token);
          }
          
        },
        error:(err)=>{
          this.isloading=false;
          console.log(err)
      
          
          
          console.log(err.error.message);
          this.errorMSG=err.error.message;
        }
      })
    }


    else{
      this.isloading=false;
      this.loginform.markAllAsTouched();
    }
        
  }
}
