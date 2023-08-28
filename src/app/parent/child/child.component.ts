import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  child_text = "Data from child component"
  @Input()
  EmpName!: string;
  @Output() childStringText: EventEmitter<string>=new EventEmitter

  ngOninit(){
    console.log(this.EmpName)
  }

  sendData(){
    this.childStringText.emit(this.child_text)
  }

}
