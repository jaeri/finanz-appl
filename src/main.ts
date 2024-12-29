import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UserListComponent } from "./app/user/user-list/user-list.component";

bootstrapApplication(UserListComponent, appConfig)
  .catch((err) => console.error(err));
