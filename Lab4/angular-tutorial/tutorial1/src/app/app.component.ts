import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-user-old',
  standalone: true,
  template: `
    Username: {{ username }}
  `,
})
export class OldUserComponent {
  username = 'youngTech';
}



@Component({
  selector: 'app-root', 
  imports: [OldUserComponent, RouterOutlet, UserComponent, ChildComponent],
  standalone: true,
  template: `
    <section>
      <h3>Interpolation - use double curly braces</h3>
      Hello, {{city}}, 1 + 1 = {{1+1}}
    </section>

    <section>
      <h3>Using nested components</h3>
      <app-user-old />
    </section>

    <section>
      <h3>Conditionals</h3>
      @if (isServerRunning) {
        <span>Yes, the server is running</span>
      }
      @else {
        <span>No, the server is not running</span>
      }
    </section>

    <section>
      <h3>Loops</h3>
      <ul>
      @for (user of users; track user.id) {
        <li>{{ user.name }}</li>
      }
      </ul>
    </section>

    <section>
      <h3>Property Binding - use []</h3>
      <div [contentEditable]="isEditable" class="editable-div">
        Some text
      </div>
    </section>

    <section>
      <h3>Event binding - use ()</h3>
      <section (mouseover)="onMouseOver()" class="event-binding-div">
        Hover to reveal the result of binded function.
        <p>{{ message }}</p>
      </section>
    </section>
    
    <section>
      <h3>Input property - uses user component</h3>
      <app-user name="Simran" occupation="Frontend dev" />
    </section>
    
    <section>
      <h3>Output property - uses child component</h3>
      <app-child (addItemEvent)="addItem($event)" />
      <p>🐇 has reproduced {{ items.length }} times</p>
      <h4>Kids:</h4>
      <ul>
        @for (item of items; track items) {
          <li>{{item}}</li>
        }
      </ul>
    </section>
  `,
  styles: `
  :host {
    color: #a144eb;
  }
  h3 {
    color: black;
  }
  editable-div {
    height: 40px;
    width: 100%;
    border: black 1px solid;
  }
  .event-binding-div {
    width: 100%;
    border: black 1px solid;
  }
  `
  // templateUrl: './app.component.html'
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial1';
  city = 'San Francisco';
  isServerRunning : boolean = true;
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
  isEditable : boolean = true;
  message = '';
  items = new Array();

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  addItem(item : string) {
    this.items.push(item);
  }
}
