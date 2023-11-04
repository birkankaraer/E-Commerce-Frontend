import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[]=[];

  constructor(private TodoService:TodoService){}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    this.TodoService.getTodos().subscribe(response=>{//subscribe içerisindeki kodlar sırayla çalışıyor.
      this.todos = response
    })
  }



}
