import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';

@Component({
    moduleId: module.id,
	selector: 'tasks',
	templateUrl: `tasks.component.html`
})
export class TasksComponent  { 
	tasks: Task[];
	todo: string;

	constructor(private TaskService:TaskService){
		this.TaskService.getTasks()
		.subscribe(tasks =>{
			this.tasks = tasks;
			// console.log(tasks);
		});
	}

// 	 addTask(event){
// event.preventDefault();
// console.log(this.todo);
// 	}

		 addTask(event){
event.preventDefault();
var newTask ={
	todo:this.todo,
	isDone:false
	}

	this.TaskService.addTask (newTask)
	.subscribe(task => {
		this.tasks.push(task);
		this.todo ='';
		});

	}

}
 