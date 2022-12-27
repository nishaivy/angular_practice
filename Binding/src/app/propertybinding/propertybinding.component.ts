import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent{
name='Style Binding';
disable=false;
color="green";
bgColor="yellow";
  updatecolor(){
    this.color="red";
    this.bgColor="yellowgreen";
  }
}
