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
      this.url = 'http://localhost:8080/eLearningBackend/sendMessage';
    }
    else if(action === 'login') {
      this.url = 'http://localhost:8080/eLearningBackend/login';
    }
    else if(action === 'signUp') {
      this.url = 'http://localhost:8080/eLearningBackend/signUp';
    }
    else if(action === 'resetPassword') {
      this.url = 'http://localhost:8080/eLearningBackend/resetPassword';
    }
    return this.http.post(this.url,
    JSON.stringify(messageContent),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' });
  }
}
