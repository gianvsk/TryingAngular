import { Pipe, PipeTransform } from '@angular/core';
import { User } from './hello/hello.component';

@Pipe({
  name: 'prova'
})
export class ProvaPipe implements PipeTransform {

  transform(users: User[]): string[] {
    return users.map(el => el.name + " " + el.surname)
  }

}
