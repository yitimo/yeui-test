import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public checkboxTest1 = true;
  public checkboxTest2 = false;
  public ok = 0;
  public chosen = 2;
  public list = [
    {id: 1, name: '大毛'},
    {id: 2, name: '二毛'},
    {id: 3, name: '三毛'},
    {id: 4, name: '四毛'},
    {id: 5, name: '五毛'},
    {id: 6, name: '六毛'}
  ];
  constructor() { }

  ngOnInit() {
    // setInterval(() => {
    //   console.log(this.checkboxTest1, this.checkboxTest2);
    // }, 1000);
  }

  public changed($event) {
    console.log($event);
  }
  public chosenChanged($event) {
    console.log($event, this.chosen);
  }
}
