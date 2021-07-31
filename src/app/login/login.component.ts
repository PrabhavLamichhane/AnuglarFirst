import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../services/backend-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: string = "Not verified";

  constructor(private backendService: BackendServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClicked() {
    // if (this.backendService.verifyUser(this.username, this.password))
    //   this.message = "Verified";
    this.backendService.verifyUser(this.username, this.password).subscribe(m => {
      if (m)
        // this.message = "Verified";
        this.router.navigate(['/home']);

    },
      error => console.log(error));

  }

  onClear() {
    this.username = "";
    this.password = "";
    this.message = "";
  }

}
