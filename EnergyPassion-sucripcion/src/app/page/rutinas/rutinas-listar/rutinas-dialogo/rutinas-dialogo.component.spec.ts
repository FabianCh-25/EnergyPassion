import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasDialogoComponent } from './rutinas-dialogo.component';

describe('RutinasDialogoComponent', () => {
  let component: RutinasDialogoComponent;
  let fixture: ComponentFixture<RutinasDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinasDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinasDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
