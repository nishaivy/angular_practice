import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {

  constructor() { }
    loadhome(){
    
      let url='http://localhost:4200/home';
      window.open(url,'_blank');
    }

}
