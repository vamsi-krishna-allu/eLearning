import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url : string = '';
  constructor(private http: HttpClient, private localStorageService: LocalstorageService) { }

  sendMessage(messageContent: any, action: string) {
    console.log(JSON.stringify(messageContent));
    const token = this.localStorageService.get("TOKEN");
    if (action === 'sendMessage') {
      this.url = 'http://localhost:8080/sendMessage';
    }
    return this.http.post(this.url,
      messageContent, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        responseType: 'text',
      })
    });
  }

  authenticateUser(user: any) {
    this.url = 'http://localhost:8080/authenticate';
    return this.http.post(this.url,
      user);
  }

  registerUser(user: any) {
    this.url = 'http://localhost:8080/register';
    return this.http.post(this.url,
      user);
  }

  resetPassword(user: any) {
    this.url = 'http://localhost:8080/resetPassword';
    return this.http.post(this.url,
      user);
  }

  getPdfFile(fileName: string) {
    const token = this.localStorageService.get("TOKEN");
    this.url = `http://localhost:8080/getPdfFile`;
    return this.http.get(this.url, {
      headers:  new HttpHeaders({
        Authorization: `Bearer ${token}`,
        responseType : 'blob',
      }),
    });
  }

  getMockTest(tesType: string): Observable<any> {
    const token = this.localStorageService.get("TOKEN");
    this.url = `http://localhost:8080/questions`;
    return this.http.get(this.url, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
      params: {testType: tesType}
    });
  }
}
