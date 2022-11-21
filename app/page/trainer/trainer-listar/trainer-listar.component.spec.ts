import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerListarComponent } from './trainer-listar.component';

describe('TrainerListarComponent', () => {
  let component: TrainerListarComponent;
  let fixture: ComponentFixture<TrainerListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
