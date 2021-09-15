import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url : string = '';
  constructor(private http: HttpClient) { }

  sendMessage(messageContent: any, action: string) {
    console.log(JSON.stringify(messageContent));
    if(action === 'sendMessage') {
      this.url = 'http://localhost:8080/sendMessage';
    }
    return this.http.post(this.url,
    messageContent, { responseType: 'text' });
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
}
