import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockTestsComponent } from './mock-tests/mock-tests.component';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpInterceptorService } from './http-interceptor.service';
import { TestListComponent } from './mock-tests/test-list/test-list.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CoursepriceComponent } from './courseprice/courseprice.component';
import { FooterComponent } from './footer/footer.component';
import { TestResultComponent } from './test-result/test-result.component';
import { GaugeChartModule } from 'angular-gauge-chart';
import { TestInstructionsComponent } from './test-instructions/test-instructions.component';
import { CourseViewComponent } from './courses/course-view/course-view.component';
import { AutoRefreshComponent } from './auto-refresh/auto-refresh.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    FaqComponent,
    AboutComponent,
    ContactsComponent,
    MockTestsComponent,
    LoginComponent,
    TestListComponent,
    SubscribeComponent,
    CoursepriceComponent,
    FooterComponent,
    TestResultComponent,
    TestInstructionsComponent,
    CourseViewComponent,
    AutoRefreshComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    PdfViewerModule,
    GaugeChartModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,  
      useClass: HttpInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
