import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  employeeName!: string;

  ngOnInit(){
    //this.employeeName = "Anjitha"
  }
  ReceivedData(value: any){
    console.log(value)
    this.employeeName = value
  }
}
