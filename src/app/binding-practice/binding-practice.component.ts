import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrls: ['./binding-practice.component.css']
})
export class BindingPracticeComponent implements OnInit {

  itemImageUrl: string = "./../../assets/jobs.jpg";

  testClasses: string = "abc cdf";
  myClass: string = "bac"
  applyTestClass: boolean = false;
  applyRedStyle: boolean = true;
  testObj: Object = { ID: 1, Name: "Ramesh", Age: 22 };
  clickCounter: number = 0;

  login1: string = "test1";
  login2: string = "test2";
  login3: string = "test3";

  fontSizePx1: number = 16;
  fontSizePx2: number = 16;


  constructor() { }

  getColor() {
    return 'yellow';
  }

  onSaveClick($event: any) {
    debugger;
    if ($event) {
      alert('button clicked ' + $event.target.textContent);
    }
    else {
      alert('button clicked');
    }

    this.clickCounter++;
  }

  setText($event:any){
    this.login1 = $event.target.value;
  }

  show(v:any){
    alert(v);
  }

  ngOnInit(): void {
  }

}
