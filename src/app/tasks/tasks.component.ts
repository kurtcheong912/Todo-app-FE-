import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  addTask() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
