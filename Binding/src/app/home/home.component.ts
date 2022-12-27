import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Angular_Assignment_Event_Binding';
  eventType1: any;
  eventType2: any;
  showClick: boolean = false;
  showHover: boolean = false;
  greet($event: any) {
    console.log($event.type);
    this.eventType1 = $event.type;
    this.showClick = true;
  }
  greetHover($event: any) {
    console.log($event.type);
    this.eventType2 = $event.type;
    this.showHover = !this.showHover;


  }
}
