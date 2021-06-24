import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../ITask';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() formSubmitEvent: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.formSubmitEvent.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
