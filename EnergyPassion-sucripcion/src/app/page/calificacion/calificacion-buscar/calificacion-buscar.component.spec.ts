import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionBuscarComponent } from './calificacion-buscar.component';

describe('CalificacionBuscarComponent', () => {
  let component: CalificacionBuscarComponent;
  let fixture: ComponentFixture<CalificacionBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
