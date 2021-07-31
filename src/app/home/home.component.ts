import { Component, OnInit, Inject } from '@angular/core';
import { TestClass } from '../models/person';
import { BackendServiceService } from '../services/backend-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hisAge: number;
  name: string;
  constructor(@Inject("MyToken") private v: any, @Inject("MyTest") private v2: TestClass, private backendService: BackendServiceService) {

  }

  ngOnInit(): void {

    this.name = this.backendService.getName();
    // this.hisAge = this.v2.age;
    // console.log(this.hisAge);
  }

}
