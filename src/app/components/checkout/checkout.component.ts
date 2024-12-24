import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'src/app/shared/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  errorMSG:string='';
  isloading:boolean=false;
  cities:string[]=['Cairo',
  'Alexandria',
  'Giza',
  'Sharm El Sheikh',
  'Hurghada',
  'Mansoura',
  'Tanta',
  'Port Said',
  'Suez',
  'Aswan',
  'Luxor',
  'Ismailia',
  'Faiyum',
  'Minya',
  'Qena',
  'Damanhur',
  'Beni Suef',
  'Zagazig',
  'Damietta',
  '6th of October City',
  'October 6',
  'New Cairo',
  'El Mahalla El Kubra',
  'Sohag',
  'Kafr El Sheikh',
  'North Sinai',
  'South Sinai'];
  cartId:string='';
  constructor(private _FormBuilder:FormBuilder ,private _ActivatedRoute:ActivatedRoute
    ,private _CheckoutService:CheckoutService
  ){}
  checkoutForm:FormGroup=this._FormBuilder.group({
    details:[''
      // ,
      // [Validators.required]
    ],
    phone:[''
      // ,[Validators.required,Validators.pattern(/^01[125][0-9]{8}$/)]
    ],
    city:[''
      // ,[Validators.required]
    ]
  })
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(response)=>{
        console.log(response.get('id'))
        this.cartId=response.get('id') as string; 
      }
    })
  }
  

  checkingout():void{
    if(this.checkoutForm.status=='VALID'){
      console.log(this.checkoutForm.value)
      this._CheckoutService.checkout(this.cartId,this.checkoutForm.value).subscribe({
        next:(response)=>{
          if(response.status=='success'){
            window.open( response.session.url  ,'_self')
          }
        }
      })
    }
  }

}
