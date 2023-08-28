import { Component } from '@angular/core';

@Component({
  selector: 'app-filetr',
  templateUrl: './filetr.component.html',
  styleUrls: ['./filetr.component.css']
})
export class FiletrComponent {

  country = ["Anjitha","Angel","Amitha","James"]
  add(val: string){
    this.country.push(val)
    console.log(this.country)
  }

}
