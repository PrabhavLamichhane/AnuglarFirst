import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { BackendServiceService } from '../services/backend-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];
  constructor(private backendservice: BackendServiceService) {
  }

  ngOnInit(): void {
    this.backendservice.getPersons().subscribe(
      m => this.persons = m,
      error => console.log(error),
      () => console.log("Completed")
    );

  }

  showMsg($event: any) {
    alert($event);
  }

}
