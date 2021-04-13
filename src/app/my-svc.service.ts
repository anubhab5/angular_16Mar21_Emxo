import { Injectable } from '@angular/core';
import { SvcTestParenService } from './svc-test-paren.service';

@Injectable({
  providedIn: 'root'
})
export class MySvcService {

  constructor() { }

  private counter: number = 0;

  getCounter() {
    return this.counter;
  }

  incrementCounterByOne(calledBy: string) {
    if (this.counter < 5 && calledBy === "Child") {
      this.counter += 1;
    } else if (calledBy === "Parent") {
      this.counter += 1;
    }
    console.log("Counter Increased.");
    // this.counter = this.counter + 1;
  }
  
  // concept of having just 1 object/ instance throughout the application is called/ know as ::: Singleton design pattern
}
