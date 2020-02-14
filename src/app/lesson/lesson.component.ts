import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Task } from '../data/Task';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  tasks: Task[];
  edit = true;

  constructor( public localStorageService: LocalStorageService ) { }

  ngOnInit() {
    this.tasks = this.localStorageService.getTasks();
  }

  editShow(ind) {
    this.tasks[ind].edit = !this.tasks[ind].edit;
  }

  onAddEdit(date) {
    this.localStorageService.addEdit(date);
  }

  deleteTask(task: Task) {
    if (confirm('You really want to delete this lesson...???')) {
      this.localStorageService.deleteTask(task);
    }
  }

}
