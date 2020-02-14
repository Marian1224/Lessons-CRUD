import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor( public localStorageService: LocalStorageService ) { }

  show = false;

  task = {
    date: '',
    topic: '',
    lecturer: '',
  };

  ngOnInit() {
  }

  modalShow() {
    this.show = !this.show;
  }

  addTask() {
    this.localStorageService.addTask({
      date: this.task.date,
      topic: this.task.topic,
      lecturer: this.task.lecturer,
      edit: false
    });
    this.task.date = '';
    this.task.topic = '';
    this.task.lecturer = '';
    return false;
  }
}
