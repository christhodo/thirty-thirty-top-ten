import { Component } from '@angular/core';

@Component({
  selector: 'top-ten-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'top-ten';
  links = [
    { path: '/videogames', icon: 'view_list', title: 'Games' },
    { path: '/login', icon: 'person', title: 'Login' },
  ];
}
