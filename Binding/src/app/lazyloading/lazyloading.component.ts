import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
@Component({
  selector: 'app-lazyloading',
  templateUrl: './lazyloading.component.html',
  styleUrls: ['./lazyloading.component.css']
})
export class LazyloadingComponent implements OnInit {

  constructor(private viewContainer:ViewContainerRef,
    private cfr:ComponentFactoryResolver) { }
    async loaddata(){
      this.viewContainer.clear();
      const {DatabindingComponent}=await import('../databinding/databinding.component');
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(DatabindingComponent)
      )
    }
    async laodproperty(){
      this.viewContainer.clear();
      const {PropertybindingComponent}=await import('../propertybinding/propertybinding.component');
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(PropertybindingComponent)
      )
    }
  ngOnInit(): void {
  }

}
