import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionCreaditaComponent } from './calificacion-creadita.component';

describe('CalificacionCreaditaComponent', () => {
  let component: CalificacionCreaditaComponent;
  let fixture: ComponentFixture<CalificacionCreaditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionCreaditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionCreaditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
