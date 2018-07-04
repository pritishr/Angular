import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // isFavorite:any;
  // message = "Hi there";
  // post = {
  //   // title: "Title",
  //   // isFavorite: true

  // }

  // onFavoriteChanged(){
  //   console.log("Favorite changed")
  // }
  courses ;

  loadCourses(){
    this.courses = [
      {id:1, name: 'course 1'},
      {id:2, name: 'course 2'},
    
    ];
  }
}
