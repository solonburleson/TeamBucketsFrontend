import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosTestComponent } from './todos-test.component';

describe('TodosTestComponent', () => {
  let component: TodosTestComponent;
  let fixture: ComponentFixture<TodosTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
