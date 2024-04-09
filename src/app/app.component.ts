import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  displayDetails = false;
  logs = [];

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.logs.push(new Date());
  }
}
