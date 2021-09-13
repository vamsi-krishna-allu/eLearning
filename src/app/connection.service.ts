import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url : string = 'http://localhost:4200/';
  constructor(private http: HttpClient) { }

  sendMessage(messageContent: any) {
    console.log(JSON.stringify(messageContent));
    return this.http.post(this.url,
    JSON.stringify(messageContent),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' });
  }
}
