import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url : string = '';
  username : any;
  constructor(private http: HttpClient, private localStorageService: LocalstorageService) { }

  sendMessage(messageContent: any, action: string) {
    console.log(JSON.stringify(messageContent));
    const token = this.localStorageService.get("TOKEN");
    if (action === 'sendMessage') {
      this.url = 'http://localhost:5000/sendMessage';
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
    this.url = 'http://localhost:5000/authenticate';
    return this.http.post(this.url,
      user);
  }

  registerUser(user: any) {
    this.url = 'http://localhost:5000/register';
    return this.http.post(this.url,
      user);
  }

  resetPassword(user: any) {
    this.url = 'http://localhost:5000/resetPassword';
    return this.http.post(this.url,
      user);
  }

  getPdfFile(fileName: string) {
    const token = this.localStorageService.get("TOKEN");
    this.url = `http://localhost:5000/getPdfFile/${fileName}`;
    return this.http.get<any>(this.url, { 
      headers:  new HttpHeaders({
        Authorization: `Bearer ${token}`,
      })});
  }

  getMockTest(tesType: string): Observable<any> {
    const token = this.localStorageService.get("TOKEN");
    this.url = `http://localhost:5000/questions`;
    return this.http.get(this.url, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
      params: {testType: tesType}
    });
  }

  evaluate(data: any) {
    const token = this.localStorageService.get("TOKEN");
    this.url = `http://localhost:5000/evaluateAnswer`;
    return this.http.post(this.url, data, {
      headers:  new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  getAvailableCourses() {
    const token = this.localStorageService.get("TOKEN");
    this.url = `http://localhost:5000/availableCourses`;
    return this.http.get(this.url, {
      headers:  new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  getAvailableMockTests() {
    const token = this.localStorageService.get("TOKEN");
    this.url = `http://localhost:5000/availableTests`;
    return this.http.get(this.url, {
      headers:  new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  payNow(planPrice : any, courseName: any, type: any) {
    const token = this.localStorageService.get("TOKEN");
    let requestBody = {
      type: type,
      course: courseName,
      price: planPrice,
    }
    this.url = `http://localhost:5000/pay`;
    return this.http.post(this.url, requestBody, {
      headers:  new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  viewTestResult(testId: string) {
    const token = this.localStorageService.get("TOKEN");
    this.url = `http://localhost:5000/showResults`;
    this.username = this.localStorageService.get('USERNAME');
    return this.http.get(this.url, {
      headers:  new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
      params: {username: this.username, testName: testId}
    });
  }
  
}
