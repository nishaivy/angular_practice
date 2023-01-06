import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../service.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
//   userData:any=[{}];
//   constructor(private userdataService:UserdataService){


// this.userdataService.getUserData().subscribe(data=>{
//     this.userData=data;
//     console.log(data);

//})
  //}

  //observables
 userData$:Observable<any>;
 constructor(private userdataservice:UserdataService){
  let userdetails=this.userdataservice.getUserData();
  this.userData$=this.userdataservice.getUserData();
  console.log(this.userData$);
 }
}
