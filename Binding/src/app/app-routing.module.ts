import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ObservableComponent } from './observable/observable.component';
import { PipesComponent } from './pipes/pipes.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
const routes: Routes = [
  {
    path:'databinding',
    component: DatabindingComponent
  },
 {
  path:'',
  component:HomeComponent
 },{path:'home',
 component:HomeComponent},
 {
  path:'propertybinding',
  component:PropertybindingComponent
 },
 {
  path:'lazyloading',
  component:LazyloadingComponent
 },
 {path:'pipes',
 component:PipesComponent
},

{
  path:'observable',
  component:ObservableComponent
},
{
  path:'**',
  component:NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
