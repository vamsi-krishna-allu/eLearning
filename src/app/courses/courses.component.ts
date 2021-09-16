import { Component, Input, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() selectedCourse : string = '';
  constructor(private connectionService : ConnectionService) { }

  ngOnInit(): void {
    this.connectionService.getPdfFile('Aadharfront').subscribe(response => {
      console.log('response');
    });
  }

}
