import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    NewcourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    PanelComponent,
    NgSwitchCaseComponent,
    ZippyComponent,
    ContactFormComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorsService,
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
