import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { BackendServiceService } from './backend-service.service';
@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  intercept(req: any, next: any) {

    return next.handle(req)
      .pipe(
        catchError(err => {
          // debugger;
          if (err.status === 401) {
            this.bs.logout()// auto logout if 401 response returned from api
              ;
            location.reload(true);
          }
          const error = err.error.message || err.statusText;
          return throwError(error);
        })//end of catchError operator
      );//end of pipe
  }//end of intercept

  constructor(private bs: BackendServiceService) { }
}
