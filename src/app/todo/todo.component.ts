import { Component, OnInit } from '@angular/core';
import { RestFulDemoService } from '../rest-ful-demo.service';

@Component({
  selector: 'test-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  toDoList: Array<any> = [];

  constructor(private todDoSvc: RestFulDemoService) { }

  ngOnInit(): void {
    this.getToDoList();
  }

  getToDoList() {
    this.todDoSvc.getToDoList().subscribe(
      (resp: any) => {
        this.toDoList = resp;
      },
      err => {
        debugger
      }
    );
  }

  getToDoByid(id: number) {
    this.todDoSvc.getToDoListById(id).subscribe(
      resp => {
        debugger
      },
      err => {

      }
    )
  }

}
