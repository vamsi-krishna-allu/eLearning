import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CoursesComponent } from './courses/courses.component';
import { CreditsComponent } from './credits/credits.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MockTestsComponent } from './mock-tests/mock-tests.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },  
  { path: 'courses', component: CoursesComponent },  
  { path: 'mockTests', component: MockTestsComponent },  
  { path: 'about', component: AboutComponent },  
  { path: 'faq', component: FaqComponent },  
  { path: 'contact', component: ContactsComponent }, 
  { path: 'credits', component: CreditsComponent},
  { path: '*', component: HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
