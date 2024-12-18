import { Component, OnInit , Input} from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  localItem :string | null
 
 todos : Todo[] = [];
  constructor() { 
    this.localItem = localStorage.getItem("todos") || "";
    if(this.localItem == null || this.localItem == ""){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
  }
  
  ngOnInit(): void {
      
  }
  deleteTodo(todo :Todo){
    const index  = this.todos.indexOf(todo);
    // console.log(index);
    const deletedTodo = this.todos.splice(index,1);
    console.log(`Deleted Todo : ${deletedTodo[0].title}`);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  
  }

  markTodo(todo : Todo){
    const index  = this.todos.indexOf(todo);

    this.todos[index].active =!this.todos[index].active;
    console.log(this.todos[index].active);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  onAddTodo(todo: Todo){
    this.todos.push(todo); // Add the new todo to the list
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
