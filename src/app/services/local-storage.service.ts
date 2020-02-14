import { Injectable } from '@angular/core';
import { Task } from '../data/Task';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  tasks: Task[] = [];

  constructor() {}

  getTasks() {
    if (localStorage.getItem('rec')) {
      this.tasks = JSON.parse(localStorage.getItem('rec'));
    }
    return this.tasks;
  }

  addTask(task: Task) {
    task.edit = false;
    this.tasks.push(task);
    localStorage.setItem('rec', JSON.stringify(this.tasks));
  }

  addEdit(data) {
    localStorage.setItem('rec', JSON.stringify(this.tasks));
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task === this.tasks[i]) {
        this.tasks.splice(i, 1);
      }
    }
    localStorage.setItem('rec', JSON.stringify(this.tasks));
  }
}
