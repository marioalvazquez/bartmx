import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosRapa2Component } from './todos-rapa2.component';

describe('TodosRapa2Component', () => {
  let component: TodosRapa2Component;
  let fixture: ComponentFixture<TodosRapa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosRapa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosRapa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
