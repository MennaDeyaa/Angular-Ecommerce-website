import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [
  {path:'',redirectTo:'update',pathMatch:'full'},
  {path:'change',component:ChangePasswordComponent},
  {path:'update',component:UpdatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
