import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionDialogoComponent } from './calificacion-dialogo.component';

describe('CalificacionDialogoComponent', () => {
  let component: CalificacionDialogoComponent;
  let fixture: ComponentFixture<CalificacionDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
