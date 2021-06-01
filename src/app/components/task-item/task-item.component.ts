import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Task } from "../../Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit() {}

  onDelete(task) {
    console.log("inside onDelete");
    console.log("task is: ", task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task) {
    console.log("inside onToggle");
    this.onToggleReminder.emit(task);
  }
}
