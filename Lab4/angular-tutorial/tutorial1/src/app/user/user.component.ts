import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
    <p>The user's name is {{ name }}</p>
    <p>The user's occupation is {{ occupation }} </p>
  `,
  styles: `
  `
  // templateUrl: './user.component.html',
  // styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation = '';
  @Input() name = '';
}
