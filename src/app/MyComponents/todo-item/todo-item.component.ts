import { Component, OnInit , Input, Output} from '@angular/core';
import { Todo } from '../../Todo';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input()
  todo!: Todo; 
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter
  @Output() markAsDone : EventEmitter<Todo> = new EventEmitter
  
  constructor() { }

  ngOnInit(): void {
    
  }
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    // console.log("delete button is trigered");
  }
  onMarkAsDone(todo:Todo){
    this.markAsDone.emit(todo);
  }
}
