import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
const routes: Routes = [
  {
    path:'databinding',
    component: DatabindingComponent
  },
 {
  path:'home',
  component:HomeComponent
 },
 {
  path:'propertybinding',
  component:PropertybindingComponent
 },{
  path:'',
  component:AppComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
