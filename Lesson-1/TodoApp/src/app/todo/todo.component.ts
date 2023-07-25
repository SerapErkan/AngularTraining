import { Component } from '@angular/core';

@Component({
  selector: 'Todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  title = 'AngularTraining';
  // todos: string[] = [];
  isCompleted: boolean = false;
  todos: { work: string; isCompleted: boolean }[] = [];

  work: string = '';
  addTodoApp() {
    // this.todos.push(this.work);
    // this.work = '';
    this.todos.push({ work: this.work, isCompleted: this.isCompleted });
    this.work = '';
    this.isCompleted = false;
  }
}
