import { Component } from '@angular/core';

export interface User {
  name: string,
  surname: string
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})

export class HelloComponent {

  values = ['Primo', 'Secondo', 'Terzo']

  counter = 0;

  changeCounter = (type: 'minus' | 'add') => {
    type === 'minus' ? this.counter - 1 : this.counter + 1
  }

  people : User[] = [{name: "Ciao", surname: "Ok"}, {name: "Bene", surname: "Russo"}]


}
