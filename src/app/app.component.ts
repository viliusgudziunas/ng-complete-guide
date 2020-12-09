import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayDetails = true;
  log = [];

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.log.push(new Date());
  }
}
