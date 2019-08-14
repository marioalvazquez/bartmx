import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServalComponent } from './serval.component';

describe('ServalComponent', () => {
  let component: ServalComponent;
  let fixture: ComponentFixture<ServalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
