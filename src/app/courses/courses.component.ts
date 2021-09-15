import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private connectionService : ConnectionService) { }

  ngOnInit(): void {
    this.connectionService.getPdfFile('Aadharfront').subscribe(response => {
      console.log('response');
    });
  }

}
