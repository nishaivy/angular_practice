import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { HeaderComponent } from './header/header.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsdInrPipe } from './custompipes/usd-inr.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { ObservableComponent } from './observable/observable.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    HomeComponent,
    PropertybindingComponent,
    HeaderComponent,
    LazyloadingComponent,
    PipesComponent,
    UsdInrPipe,
    NotfoundComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
