import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'course-image',
  imports: [],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent {

 @Input('src')
 imageUrl:string;

}
