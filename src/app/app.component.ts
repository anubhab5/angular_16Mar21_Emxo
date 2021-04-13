import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'abc';

  constructor(private route: Router) { }

  gotoProduct() {
    this.route.navigate(['products']);
  }

}
