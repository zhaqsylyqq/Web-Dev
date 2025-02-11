import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';
import { ReactiveFormsModule, FormControl, FormGroup, Validator } from '@angular/forms';

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
  imports: [OldUserComponent, RouterOutlet, UserComponent, 
    ChildComponent, CommentsComponent, RouterLink, ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial1';
  city = 'San Francisco';
  isServerRunning : boolean = true;
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
  isEditable : boolean = true;
  message = '';
  items = new Array();
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  addItem(item : string) {
    this.items.push(item);
  }

  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
