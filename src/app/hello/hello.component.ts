import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {

  value = ['Primo', 'Secondo', 'Terzo']

  counter = 0;

  changeCounter = (type: 'minus' | 'add') => {
    type === 'minus' ? this.counter - 1 : this.counter + 1
  }
  

}
