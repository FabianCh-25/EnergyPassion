import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionlistarComponent } from './calificacionlistar.component';

describe('CalificacionlistarComponent', () => {
  let component: CalificacionlistarComponent;
  let fixture: ComponentFixture<CalificacionlistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionlistarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionlistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
