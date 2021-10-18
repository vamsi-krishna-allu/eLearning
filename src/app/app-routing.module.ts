import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CoursepriceComponent } from './courseprice/courseprice.component';
import { CourseViewComponent } from './courses/course-view/course-view.component';
import { CoursesComponent } from './courses/courses.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MockTestsComponent } from './mock-tests/mock-tests.component';
import { TestListComponent } from './mock-tests/test-list/test-list.component';
import { TestResultComponent } from './test-result/test-result.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },  
  { path: 'courses', component: CoursesComponent },  
  { path: 'openTest', component: MockTestsComponent },  
  { path: 'about', component: AboutComponent },  
  { path: 'faq', component: FaqComponent },  
  { path: 'contact', component: ContactsComponent }, 
  { path: 'mockTests', component: TestListComponent},
  { path: 'subscribe', component: CoursepriceComponent},
  { path: 'result', component: TestResultComponent},
  { path: 'view-course', component: CourseViewComponent},
  { path: '*', component: HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
