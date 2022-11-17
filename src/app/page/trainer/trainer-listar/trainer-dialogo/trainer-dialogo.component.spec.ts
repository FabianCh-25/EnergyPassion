import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDialogoComponent } from './trainer-dialogo.component';

describe('TrainerDialogoComponent', () => {
  let component: TrainerDialogoComponent;
  let fixture: ComponentFixture<TrainerDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
