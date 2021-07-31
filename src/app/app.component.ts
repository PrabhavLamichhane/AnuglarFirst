import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Prabhav';
  sizeDefault = 18;

  sizeHandler($event: any) {
    alert($event);
  }
}
