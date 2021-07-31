import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req:any, next:any){

    console.log('intercept' + req.url);
    if((<string>req.url).indexOf('omdbapi') > 0){
      return next.handle(req);
    }

    let token = localStorage.getItem('token');
    console.log(token);
    if(token){
      const clonedReq = req.clone({
        setHeaders: {'Authorization': `Bearer ${token}`}
      });

      return next.handle(clonedReq);
    }
    else {
      return next.handle(req);
    }
  }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const token = localStorage.getItem('token');
//     if (token) {
//         const cloned = request.clone({
//             setHeaders: {
//                 Authorization: `Bearer ` + token
//             }
//         });
//         return next.handle(cloned);
//     } else {
//         return next.handle(request)
//     }
// }


  constructor() { }
}
