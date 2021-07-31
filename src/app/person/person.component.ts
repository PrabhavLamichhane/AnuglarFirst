import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/person';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Output() message = new EventEmitter<string>();
  constructor() {
    // this.person = new Person("Ramesh", 22, "Male");
  }

  ngOnInit(): void {
  }

  clicked(name: string) {
    this.message.emit("Hi How are you? " + name);
  }



}
