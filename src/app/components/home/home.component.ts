import { Component, OnInit } from '@angular/core';
import { ObjectUtil } from '../../utils/object.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value = 'test';
  constructor() { }

  ngOnInit() {
    const people = new People(1, 'test', new Man());
    // people.man.gender = 'male';
    // people.man.say = 'hello';
    const people1 = ObjectUtil.deepCopy(People, people);
    // const people1 = Object.assign(new People(), people);
    people.man.say = 'hello';
    people1.man.say = 'hello1';
    console.log(people1);
    console.log(people);
  }

}

class People {
  id: number;
  name: string;
  man: Man;
  constructor (id?: number, name?: string, man?: Man) {
    if (id) {
      this.id = id;
    }
    if (name) {
      this.name = name;
    }
    if (man) {
      this.man = man;
    }
  }
}

class Man {
  gender: string;
  say: string;
}
