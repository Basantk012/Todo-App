import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);
  constructor() { 
    const savedTodos = localStorage.getItem("todos");
    
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
      this.todosSubject.next(this.todos);
    }
  }
}


