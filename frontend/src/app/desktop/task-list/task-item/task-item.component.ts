import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  @Input() task: {description: string, completion: boolean, id: number, edit: boolean};
  // @Output() editedTask = new EventEmitter<{editedTaskCount: number, action: string}>();
  constructor(private taskService: TaskService) {}

  ngOnInit() {
  }

  // Emit the count of the task to be edited.
  onTaskEdit() {
    this.taskService.editTask(this.task.id);
    // USED WITH EventEmitter!!
    // this.editedTask.emit({
    //   editedTaskCount: this.task.count
    // });
  }
  // Emit the count of the task to be removed
  onTaskRemove() {
    this.taskService.removeTask(this.task.id);
    // this.remove.emit({
    //   editedTaskCount: this.task.count
    // });
  }

  onCheckboxChange() {
    this.taskService.changeCheckboxState(this.task.id);
    // this.changeCheckboxState.emit({
    //   editedTaskCount: this.task.count,
    //   action: 'check'
    // });
  }
}
