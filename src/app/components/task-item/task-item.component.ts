import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../ITask'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  faTimes = faTimes;
  @Input() task!: Task
  @Output() deleteEvent: EventEmitter<Task> = new EventEmitter()
  @Output() reminderEvent: EventEmitter<Task> = new EventEmitter()
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  onDelete(task: Task) {
    this.deleteEvent.emit(task)
  }
  onToggleReminder(task: Task) {
    this.reminderEvent.emit(task)
  }
}
