import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MySvcService } from '../my-svc.service';

@Component({
  selector: 'app-app-child2',
  templateUrl: './app-child2.component.html',
  styleUrls: ['./app-child2.component.css']
})
export class AppChild2Component implements OnInit {

  // Field decortaor
  // applied on variables

  @Input()
  inputStudentList;

  @Input()
  randomNumberGenerated: number = null;

  @Output()
  studentEmitter = new EventEmitter();

  constructor(private mySvc: MySvcService) { }

  // every time the input of the component changes
  // called first
  ngOnChanges(changes: SimpleChanges) {
    this.randomNumberGenerated
  }

  // in the time of initialization
  ngOnInit(): void {
    console.log(this.inputStudentList);
    console.log("in ng on init");
  }

  studentClicked(studentName: string) {
    this.studentEmitter.emit(studentName);
  }

  getCounterDetail() {
    alert(this.mySvc.getCounter());
  }

  incrementCounterByOne() {
    this.mySvc.incrementCounterByOne("Child");
  }

}
