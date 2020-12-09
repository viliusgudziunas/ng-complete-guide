import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayDetails = true;
  buttonClicks = [];

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }
}
