import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteProyectoComponent } from './ante-proyecto.component';

describe('AnteProyectoComponent', () => {
  let component: AnteProyectoComponent;
  let fixture: ComponentFixture<AnteProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnteProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
