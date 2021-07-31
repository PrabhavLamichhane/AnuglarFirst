import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../services/backend-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAuthenticated: boolean = false;
  constructor(private backendService: BackendServiceService) { }

  ngOnInit(): void {
    this.backendService.userLoggedInObs
      .subscribe(m => this.isAuthenticated = m);
  }

}
