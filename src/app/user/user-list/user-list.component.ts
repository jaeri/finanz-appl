import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <p>user-list works! sdsd sad </p>
  `,
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  title = "List of users";
}
