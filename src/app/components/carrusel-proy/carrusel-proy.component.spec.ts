import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselProyComponent } from './carrusel-proy.component';

describe('CarruselProyComponent', () => {
  let component: CarruselProyComponent;
  let fixture: ComponentFixture<CarruselProyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselProyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
