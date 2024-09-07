import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule , FormsModule,TodoComponent],
})

export class TodoComponent {
  // Array obj
  todos: { task: string, completed: boolean } [] = [];

  
  newTask: string = '';

  
  addTask() {
    if (this.newTask.trim()) {
      this.todos.push({ task: this.newTask.trim(), completed: false });
      this.newTask = ''; 
    }
  }

  
  deleteTask(index: number) {
    this.todos.splice(index, 1);
  }

  
  covertComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
