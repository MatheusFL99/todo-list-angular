import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks!:Task[]
  inputTask!:string

  constructor() { 
  }

  ngOnInit(): void {
    this.tasks = [
      {
        content: 'Tarefa 1',
        completed: false
      },
      {
        content: 'Tarefa 2',
        completed: true
      }
    ]
  }

  toggleDone (id:number) {
    this.tasks.map((v,i) => {
      if (i == id)v.completed = !v.completed

      return v
   })
  }

  deleteTask (id:number) {
    this.tasks = this.tasks.filter((v,i) => i !== id)
  }

  addTask () {
    
    if (this.inputTask.length > 0) {
      this.tasks.push({
      content: this.inputTask,
      completed: false
    })

    this.inputTask = ''
    }

  }
}