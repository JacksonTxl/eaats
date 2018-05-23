import { Component, OnInit } from '@angular/core';

@Component({
  template:
  `
    test
    <router-outlet></router-outlet>
  `,
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
