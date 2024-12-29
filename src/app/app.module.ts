import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {path:'', component:AppComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
