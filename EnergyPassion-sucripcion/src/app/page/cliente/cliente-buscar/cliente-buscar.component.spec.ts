import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteBuscarComponent } from './cliente-buscar.component';

describe('ClienteBuscarComponent', () => {
  let component: ClienteBuscarComponent;
  let fixture: ComponentFixture<ClienteBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
