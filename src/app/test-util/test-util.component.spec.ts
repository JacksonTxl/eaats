import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUtilComponent } from './test-util.component';

describe('TestUtilComponent', () => {
  let component: TestUtilComponent;
  let fixture: ComponentFixture<TestUtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
