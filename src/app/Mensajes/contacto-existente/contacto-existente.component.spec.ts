import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoExistenteComponent } from './contacto-existente.component';

describe('ContactoExistenteComponent', () => {
  let component: ContactoExistenteComponent;
  let fixture: ComponentFixture<ContactoExistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoExistenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
