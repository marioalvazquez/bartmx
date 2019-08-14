import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcepcionCabreraComponent } from './concepcion-cabrera.component';

describe('ConcepcionCabreraComponent', () => {
  let component: ConcepcionCabreraComponent;
  let fixture: ComponentFixture<ConcepcionCabreraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcepcionCabreraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcepcionCabreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
