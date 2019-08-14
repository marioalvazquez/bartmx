import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep7aComponent } from './ep7a.component';

describe('Ep7aComponent', () => {
  let component: Ep7aComponent;
  let fixture: ComponentFixture<Ep7aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ep7aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ep7aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
