import { Component, OnInit } from '@angular/core';
import { Databinding } from './databinding'
@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
userdata:Databinding={
  "id":1,
  "first_name":"nisha",
  "last_name":"hiremani",
  "email":"nh@gmail.com"
}
message:any="Hello Everyone this is Two-Way Data Binding";


}
