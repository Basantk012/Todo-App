import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
@Output() AddTodo : EventEmitter<Todo> = new EventEmitter()

todo: Todo = {
  
  title: '',
  description: '',
  active: true
};

  constructor() { 
  
  }

  ngOnInit(): void {
  }
onAddTodo(todo : Todo){
  console.log(todo);
  this.AddTodo.emit(todo);
  this.todo = { title: '', description: '', active: true }; // Reset the form after submitting
  console.log(todo);
}
}
