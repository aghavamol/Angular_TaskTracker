import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UiService } from "../../services/ui.service";
import { Observable, Subscription } from "rxjs";

import { Task } from "../../Task";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;
  subscription: Subscription;
  showAddTask: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log("inside onSubmit");
    if (!this.text) {
      alert("Please add a task!");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
    this.clearForm();
  }

  clearForm() {
    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
