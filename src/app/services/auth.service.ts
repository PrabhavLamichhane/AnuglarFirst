import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendServiceService } from './backend-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  canActivate(): Observable<boolean> | boolean {
    if (this.backendService.isAuthenticated())
      return true;
    return false;
  }

  constructor(private backendService: BackendServiceService) { }
}
