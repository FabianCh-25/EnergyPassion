import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreaeditaComponent } from './cliente-creaedita.component';

describe('ClienteCreaeditaComponent', () => {
  let component: ClienteCreaeditaComponent;
  let fixture: ComponentFixture<ClienteCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
