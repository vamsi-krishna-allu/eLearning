import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  totalPages: number = 0;
  isLoaded: boolean = false;
  pdfDocumentSrc: any;
  page: number = 1;
  doesFileExist: boolean = false;
  
  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.connectionService.getPdfFile(`${history.state.data}.pdf`).subscribe((responseMessage: any) => {
      var binary_string = window.atob(responseMessage.fileContent);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
         bytes[i] = binary_string.charCodeAt(i);
      }
      var byteArray = bytes.buffer;
      let file: any = new Blob([byteArray], {
         type: 'application/octet-stream'
      });
      this.pdfDocumentSrc = URL.createObjectURL(file);
      this.doesFileExist = true;
    });
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

}
