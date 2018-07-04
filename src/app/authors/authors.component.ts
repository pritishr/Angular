import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent  {
authors;
isActive = false;
email = "me@example.com";

onKeyUp1(e){

  console.log(e.target.value);
}
onSave(){

  console.log("Button was clicked");
}

onKeyUp($event){

  console.log($event.target.value);
}
  constructor(x: AuthorsService) {
  this.authors = x.getAuthors();
  
  // isActive = true;

   }
 
  

}
