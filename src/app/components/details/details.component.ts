import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  detailsOFproduct:Product={} as Product ;
  detailslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: false
  }

  constructor(private _ActivatedRoute:ActivatedRoute,private _EcomdataService:EcomdataService,
    private _ToastrService:ToastrService,private _CartService:CartService
  ){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        let ID_product:any=params.get('id');
        //api ab3tlo l id l ana mskto da
        this._EcomdataService.gettingdetails(ID_product).subscribe({
          next:(response)=>{
            this.detailsOFproduct= response.data
          },
        })
      }
    })
  }
  addingTocart(id:string){
    this._CartService.addTOcart(id).subscribe({
      next:(response)=>{
        // console.log(response)
        this._ToastrService.success(response.message,'Fresh Cart')
      },
      error:(err)=>{console.log(err)}
    })
}


}
