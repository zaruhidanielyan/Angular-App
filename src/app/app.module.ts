import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CorseCardComponent } from './course-card/course-card.component'
import { CourseImageComponent } from "./course-image/course-image.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CorseCardComponent,
    CourseImageComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
