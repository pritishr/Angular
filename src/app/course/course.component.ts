import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers : []
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myname : string = "Pritish";
}
