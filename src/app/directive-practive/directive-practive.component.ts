import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practive',
  templateUrl: './directive-practive.component.html',
  styleUrls: ['./directive-practive.component.css']
})
export class DirectivePractiveComponent implements OnInit {

  testObj = { id: 6, name: "testing", price: 100 };

  selectedCountry: string = "0";

  persons = [
    { id: 1, name: "Ramesh" },
    { id: 2, name: "Ramlala" },
    { id: 3, name: "Dinesh" },
  ];

  showdiv = false;
  color = "green";

  constructor() { }

  ngOnInit() {
  }

  changeCountry(v: any) {
    this.selectedCountry = v.target.value;
  }
  getColor(): string {
    if (this.testObj.id > 5)
      return "green";
    else
      return "grey";
  }
  getColorObj(): Object {
    if (this.testObj.id > 5)
      return { 'background-color': 'red', 'color': 'blue' };
    else
      return { 'background-color': 'yellow' };
  }

}
