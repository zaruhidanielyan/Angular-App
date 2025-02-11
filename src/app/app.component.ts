import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CorseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css',],
    standalone: false
})

export class AppComponent implements AfterViewInit{

 courses = [...COURSES];

 @ViewChildren(CorseCardComponent, {read: ElementRef})
 cards : QueryList<ElementRef>;

 constructor(){
  
 }

ngAfterViewInit() {

  console.log(this.cards)

}

 onCourseSelected(course:Course){

}
}