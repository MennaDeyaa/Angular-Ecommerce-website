import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthlayoutComponent } from './components/authlayout/authlayout.component'
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';

const routes: Routes = [
  {path:'',
    canActivate:[authGuard],
    component:BlankLayoutComponent,
    children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'setting',loadChildren:()=>import('./setting/setting.module').then((m)=>m.SettingModule) },
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'allorders',component:AllordersComponent},
    {path:'products',component:ProductsComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'checkout/:id',component:CheckoutComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'brands',component:BrandsComponent}
  ]},

  {path:'',component:AuthlayoutComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    
  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
