import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { SpinnerService } from './spinner.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor( private localStorageService: LocalstorageService, private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    const token = this.localStorageService.get("TOKEN");
    if(token) {
      // req = req.clone({
      //   url:  req.url,
      //   setHeaders: {
      //     Authorization: `Bearer ${token}`,
      //     "Access-Control-Allow-Origin": "http://localhost:8080"
      //   }
      // });
    }
    return next
            .handle(req)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.spinnerService.hide();
                    }
                }, (error) => {
                    this.spinnerService.hide();
                })
            );
  }
}

