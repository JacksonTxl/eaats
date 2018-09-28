import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-util',
  templateUrl: './test-util.component.html',
  styleUrls: ['./test-util.component.css']
})
export class TestUtilComponent implements OnInit {

  @Input()
  testValue;
  constructor() { }

  ngOnInit() {
  }

}
