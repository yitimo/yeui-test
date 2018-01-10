import { Component, ViewEncapsulation } from '@angular/core';
import { Yup } from 'yeui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  constructor(
    private yup: Yup
  ) {}
  public test() {
    this.yup.alert({body: '你好啊'});
  }
}
