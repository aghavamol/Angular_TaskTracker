import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { Task } from "../../Task";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    console.log("inside deleteTask");
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== task.id;
      });
    });
  }

  toggleReminder(task: Task) {
    console.log("inside toggleReminder");
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    console.log("inside addTask");
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
