import { Component, Input, Output, EventEmitter, ViewChild, ContentChild, ElementRef, ContentChildren, AfterViewInit, AfterContentInit, OnInit, QueryList, TemplateRef } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';


@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CorseCardComponent{ 

   @Input()
   course:Course;

   @Input()
   noImageTpl: TemplateRef<any>;

   @Input()
   cardIndex: number;

   @Output()
   courseSelected = new EventEmitter<Course>();
   
   @ContentChildren(CourseImageComponent, {read: ElementRef})
   image: ElementRef;

   ngAfterViewInit(){
    console.log(this.image)
   }
   
   ngAfterContentInit() {

    console.log(this.image)

   }

   isImageVisible(){
    return this.course && this.course.iconUrl;
   }

   onCourseViewed() {

    this.courseSelected.emit(this.course);

   }

   cardClasses(){
    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
   }

}
