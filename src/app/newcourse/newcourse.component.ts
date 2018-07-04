import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcourse',
 // templateUrl: './newcourse.component.html',
template:`
          <h2>{{title}}</h2>
          <ul>
              <li *ngFor="let course of courses">
                    {{course}}
              </li>
          </ul>
`,
  
    styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  title = "List of courses"
  courses = ["course1", "course2"];
}
