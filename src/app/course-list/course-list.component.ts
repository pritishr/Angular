import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses = [
    {id:1, name:'course 1'},
    {id:2, name:'course 2'},
    {id:3, name:'course 3'}


  ];

  onAdd(){
    this.courses.push({id:4, name:'course 4'});
  }

  onRemove(course){
   let index = this.courses.indexOf(course);
   this.courses.splice(index,1);
  }

}
