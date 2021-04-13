import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestFulDemoService {

  constructor(private http: HttpClient) { }

  getToDoList() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getToDoListById(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/' + id);
  }

  createToDoItem(data: any) {
    return this.http.post("url", data);
  }

  editToDoItem(id: number, data: any) {
    return this.http.put("url/" + id, data);
  }

  deleteToDo(id: number) {
    return this.http.delete("url/" + id);
  }

}
