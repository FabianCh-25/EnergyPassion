import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerBuscarComponent } from './trainer-buscar.component';

describe('TrainerBuscarComponent', () => {
  let component: TrainerBuscarComponent;
  let fixture: ComponentFixture<TrainerBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
