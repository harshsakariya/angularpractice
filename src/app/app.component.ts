import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  // data = ['peter', 'harry', 'john', 'anu'];
  data = [
    {
      name: 'harsh',
      age: 20,
      email: "xyz@gmail.com"
    },
    {
      name: 'raj',
      age: 14,
      email: "xyz1@gmail.com"
    },
    {
      name: 'nandu',
      age: 15
    },
    {
      name: 'peter',
      age: 29
    }
  ];
}
