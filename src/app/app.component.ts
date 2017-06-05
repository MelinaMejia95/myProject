import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Little Monster';
  author = 'Melina Mejía';
  count = 0;
  imgSource = './../favicon.ico';
  enable = false;
}
