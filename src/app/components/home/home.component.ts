import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from 'src/app/shared/interfaces/categories';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _EcomdataService:EcomdataService,private _CartService:CartService,
    private _ToastrService:ToastrService
  ) {}
  products:Product[]=[];
  categories:Categories[]=[];
  searchtext:string=''


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  mainslider: OwlOptions = {
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

  addingTocart(id:string){
          this._CartService.addTOcart(id).subscribe({
            next:(response)=>{
              console.log(response)
              this._ToastrService.success(response.message,'Fresh Cart');
              this._CartService.CartNum.next(response.numOfCartItems);
            },
            error:(err)=>{`from Adding to cart ${err}`}
          })
  }

  ngOnInit(): void {
    this._EcomdataService.gettingProducts().subscribe({
      next:(response)=>{
        this.products=response.data
        // console.log(response.data);
      },
      error:(err)=>{console.log(`from gettingProducts${err}`)}
    })

    this._EcomdataService.gettingcategories().subscribe({
      next:(response)=>{
        this.categories=response.data
        // console.log(response.data)
        
      },
      error:(err)=>{console.log(`from gettingCategories${err}`)}
      
    })
  }

}
