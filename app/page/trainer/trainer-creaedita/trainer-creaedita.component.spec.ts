import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCreaeditaComponent } from './trainer-creaedita.component';

describe('TrainerCreaeditaComponent', () => {
  let component: TrainerCreaeditaComponent;
  let fixture: ComponentFixture<TrainerCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
